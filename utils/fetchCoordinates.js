const axios = require('axios');

async function fetchCoordinates(locationQuery) {
    try {
        const res = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: {
                q: locationQuery,
                format: "json",
                limit: 1
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

module.exports = fetchCoordinates;
