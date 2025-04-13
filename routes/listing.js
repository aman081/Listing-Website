const express=require("express");
const router=express.Router();
const Listing=require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const {validateListing}=require("../middleware.js");
const ExpressError=require("../utils/ExpressError");
const {isLoggedin,isOwner,saveRedirectUrl}=require("../middleware");
const listingController=require("../controllers/listing.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");

const upload=multer({storage});

//index route
router.get("/",wrapAsync(listingController.index));

router.get("/search",wrapAsync(listingController.searchListing));
//new route
router.get("/new", isLoggedin, listingController.renderNewForm);

   
router.get("/filter", listingController.filterByCategory);


//show route
router.get("/:id",wrapAsync(listingController.showListing))


//edit route
router.get("/:id/edit",saveRedirectUrl,isLoggedin,isOwner,wrapAsync(listingController.editListing))


//create route
 router.post("/",isLoggedin,upload.single("image"),validateListing,wrapAsync(listingController.createListing))
// router.post("/",upload.single('image'),(req,res)=>{
//    res.send(req.file);
// })


//update route
router.put("/:id",isLoggedin,isOwner,upload.single("image"),validateListing,wrapAsync(listingController.updateListing))


//delete route
router.delete("/:id",isLoggedin,isOwner,wrapAsync(listingController.deleteListing));


module.exports=router;

