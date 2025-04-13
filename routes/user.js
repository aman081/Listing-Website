const express=require("express");
const router=express.Router();
const User=require("../models/user");
const passport=require("passport");
const userController=require("../controllers/user.js");
const {saveRedirectUrl}=require("../middleware.js");
const listingController=require("../controllers/listing.js");
const wrapAsync=require("../utils/wrapAsync");



router.get("/",wrapAsync(listingController.index));
router.get("/signup",userController.renderSignup);

router.post("/signup",userController.signup);


router.get("/login",saveRedirectUrl,userController.renderLogin);


router.post("/login",passport.authenticate("local",{failureRedirect: '/login', failureFlash:true}),userController.login);
 

router.get("/logout",userController.logout);
module.exports=router;