const express=require("express");
const router=express.Router({mergeParams:true});
const Review=require("../models/review");
const Listing=require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const {isLoggedin,isAuthor}=require("../middleware");
const {validateReview}=require("../middleware.js");
const reviewController=require("../controllers/review.js");





router.post("/",isLoggedin,validateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewId",isLoggedin,isAuthor,wrapAsync(reviewController.deleteReview));

 module.exports=router;

 
