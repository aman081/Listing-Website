if(process.env.NODE_ENV !== "production"){
require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path=require('path');
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const footerRouter=require("./routes/footer.js");
const session=require("express-session");
const MongoStore=require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");



const dbUrl=process.env.ATLASDB_URL;

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24*3600,
});

store.on("error",(err)=>{
    console.log("error in mongo session store",err);
});

const sessionConfig={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
    
    }
}





 
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));



async function main(){
    await mongoose.connect(dbUrl);
}

main().then(()=>{console.log("Connected to MongoDB")})
.catch(err=>console.log(err));

app.use(session(sessionConfig));
app.use(express.static('public'));
app.use(flash());
 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});

// app.get("/",(req,res)=>{
//     res.send("Home page");
// });


app.use((req,res,next)=>{
    res.locals.success=req.flash("success"); 
    res.locals.error=req.flash("error");  
    res.locals.currUser=req.user; 
 
    next();
})

// app.get("/demo",async(req,res)=>{
//    let fakeUser=new User({
//     email:"aman@gmail.com",
//     username:"aman",
//    })

//    let registeredUser=await User.register(fakeUser,"aman123");
//    res.send(registeredUser);
// })

    



// Mount listing routes first       
app.use("/listings", listingRouter);


// Mount review routes with the listing ID parameter
app.use("/listings/:id/reviews", reviewRouter);
app.use("/footer",footerRouter);

app.use("/",userRouter);


app.all("*",(req,res,next)=>{
    console.log("404 Not Found:", req.method, req.url);
    next(new ExpressError(404,"Page Not Found"));
})

// Error handler
app.use((err,req,res,next)=>{
    console.log("Error:", err);
    let {statusCode=500,message="Something went wrong!"}=err;
    res.render("listings/error.ejs",{err});
})

