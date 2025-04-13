const User=require("../models/user");

module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup=async(req,res)=>{
  try{
    let {username,email,password}=req.body;
  let newuser=new User({username,email});
 const regUser=await User.register(newuser,password);
    // console.log(regUser);
 req.login(regUser,(err)=>{
    if(err){
        return next(err);
    }
    req.flash("success",`Aman welcomes ${req.user.username} :)`);
    res.redirect("/listings");
 })
  }catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
  }
}

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=async(req,res)=>{
 
req.flash("success",`Hii! ${req.user.username}.You're logged in.`);
const redirectUrl = req.session.redirectTo || "/listings";
delete req.session.redirectTo;
res.redirect(redirectUrl); 
}


module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        else{
            req.flash("success",`Logged out. BYE! See you soon.`);
            res.redirect("/listings");
        }
    })
}
