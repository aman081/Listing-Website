const express=require("express");
const router=express.Router();
const Footer=require("../controllers/footer.js");


router.get("/terms",Footer.getTerms);
router.get("/privacy",Footer.getPrivacy);


module.exports=router;