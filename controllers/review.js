const Listing = require("../models/listing");
const Review = require("../models/review");

 module.exports.createReview=async(req,res)=>{
    const listingId = req.params.id;
   
    
    const foundListing = await Listing.findById(listingId);
    if(!foundListing) {
        throw new ExpressError(404, "Listing not found!");
    }
    
    const newReview = new Review({
        rating: parseInt(req.body.rating),
        comment: req.body.comment,
        author: req.user._id
    });
    
    foundListing.reviews.push(newReview);
    await newReview.save();
    await foundListing.save();
    
    res.redirect(`/listings/${foundListing._id}`);
}

module.exports.deleteReview=async(req,res)=>{
    const {id,reviewId}=req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
 
    res.redirect(`/listings/${id}`);
 }