require('dotenv').config(); // force load always, for now
const axios = require("axios");

const mongoose = require("mongoose");
const { data: updatedListings } = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
}

async function fetchCoordinates(location) {
    try {
        const res = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: {
                q: location,
                format: "json",
                limit: 1,
            },
            headers: {
                "User-Agent": "ROAM-AN"
            }
        });

        const data = res.data[0];
        if (data) {
            return [parseFloat(data.lon), parseFloat(data.lat)];
        } else {
            return null;
        }
    } catch (err) {
        console.error("Error fetching coordinates:", err);
        return null;
    }
}

const upListings = [];

async function generateListings() {
    for (let i = 0; i < updatedListings.length; i++) {
        const listing = updatedListings[i];
        const locationQuery = `${listing.location}, ${listing.country}`;
        const coordinates = await fetchCoordinates(locationQuery);
        if (coordinates) {
            upListings.push({
                ...listing,
                geometry: {
                    type: "Point",
                    coordinates: coordinates,
                },
                owner: '67fad8377312f7f77397cfae', // move this inside while pushing
            });
        }
    }
}

async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(upListings);
    console.log("Database initialized with listings:", upListings.length);
}

main()
    .then(async () => {
        await generateListings(); // <-- VERY IMPORTANT
        await initDB();
    })
    .catch((err) => {
        console.log(err);
    });

