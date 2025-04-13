const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const {listingSchema}=require("./schema.js");
const {reviewSchema}=require("./schema.js");
const ExpressError=require("./utils/ExpressError.js");

module.exports.isLoggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectTo = req.originalUrl;
        req.flash("error","You must be logged in!");
       return res.redirect("/login");
         
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (!req.isAuthenticated() && req.method === "GET") {
        req.session.redirectTo = req.originalUrl;
        
    }
    next();
};


module.exports.isOwner=(req,res,next)=>{
    const {id} = req.params;
    Listing.findById(id).then((listing)=>{
        if(!listing){
            req.flash("error","Listing not found!");
            return res.redirect("/listings");
        }
        if(!listing.owner.equals(req.user._id)){
            req.flash("error","You don't have permission to do that!");
            return res.redirect(`/listings/${id}`);
        }
        next();
    }).catch((err)=>{
        req.flash("error",err.message);
        res.redirect("/listings");
    })
}

module.exports.isAuthor=(req,res,next)=>{
   const{id,reviewId}=req.params;
    Review.findById(reviewId).then((review)=>{
          if(!review){
                req.flash("error","Review not found!");
                return res.redirect("/listings");
          }
          if(!review.author.equals(req.user._id)){
                req.flash("error","You don't have permission to do that!");
                return res.redirect(`/listings/${id}`);
          }
          next();
     }).catch((err)=>{
          req.flash("error",err.message);
          res.redirect("/listings");
     })
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }
    else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error.message);
    }
    else{
        next();
    }
}

