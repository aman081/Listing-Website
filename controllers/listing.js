const Listing = require("../models/listing");
const {cloudinary} = require("../cloudConfig.js");
const fetchCoordinates=require("../utils/fetchCoordinates.js");

module.exports.index = async (req, res) => {
    let data = await Listing.find({});

    const dataWithGST = data.map(listing => {
        const gst = Math.floor(Math.random() * (25 - 5 + 1)) + 5; // Random int from 5 to 25
        return { ...listing.toObject(), gst }; // toObject() converts Mongoose doc to plain JS object
    });

    res.render("listings/index.ejs", { data: dataWithGST });
};


module.exports.searchListing = async (req, res) => {
    const { q: search } = req.query;

    if (!search || search.trim() === "") {
        req.flash("error", "Please enter a valid search term.");
        return res.redirect("/listings");
    }

    const data = await Listing.find({
        $or: [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ]
    }).populate('owner');

    if (data.length === 0) {
        req.flash("error", "No such Listing found :(");
        return res.redirect("/listings");
    }

    const dataWithGST = data.map(listing => {
        const gst = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
        return { ...listing.toObject(), gst };
    });

    res.render("listings/index.ejs", { data: dataWithGST });
};


module.exports.filterByCategory = async (req, res) => {
    const { category } = req.query;

    if (!category) {
        req.flash("error", "No category selected");
        return res.redirect("/listings");
    }

    let listings;

    if (category === "trending") {
        listings = await Listing.find({})
            .populate("owner")
            .populate("reviews");

        listings.sort((a, b) => b.reviews.length - a.reviews.length);
    } else {
        listings = await Listing.find({ category }).populate("owner");
    }

    const listingsWithGST = listings.map(listing => {
        const gst = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
        return { ...listing.toObject(), gst };
    });

    res.render("listings/index.ejs", { data: listingsWithGST });
};








module.exports.renderNewForm=(req,res)=>{
   
    res.render("listings/new.ejs");
}

module.exports.showListing=async(req,res)=>{
    const {id} = req.params;
    const reqListing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate('owner');
    
    
    if(!reqListing) {
        throw new ExpressError(404, "Listing not found!");
    }
    res.render("listings/show.ejs",{reqListing});
}

module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    let reqListing=await Listing.findById(id);
    res.render("listings/edit.ejs",{reqListing});
}

module.exports.createListing=async(req,res)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    let newListing=new Listing(req.body);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    const locationQuery = `${newListing.location}, ${newListing.country}`;
    const coordinates = await fetchCoordinates(locationQuery);

    if (coordinates) {
        newListing.geometry = {
            type: "Point",
            coordinates: coordinates
        };
    }

    await newListing.save();
    req.flash("success", "New listing added successfully!");
    res.redirect("/listings");
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, location, country } = req.body;

    const listing = await Listing.findById(id);

    listing.title = title;
    listing.description = description;
    listing.price = price;
    listing.location = location;
    listing.country = country;

    // 🗺️ Get new coordinates from OpenStreetMap
    const locationQuery = `${location}, ${country}`;
    const coordinates = await fetchCoordinates(locationQuery);

    if (coordinates) {
        listing.geometry = {
            type: "Point",
            coordinates: coordinates
        };
    }

    // 📷 Update image if a new one is uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await listing.save();

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if (listing.image && listing.image.filename) {
        await cloudinary.uploader.destroy(listing.image.filename);
    }
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted successfully!");
   
    res.redirect("/listings");
}