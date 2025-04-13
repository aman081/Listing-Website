const mongoose=require("mongoose");
const Review=require("./review.js");


const listingSchema=new mongoose.Schema({
    title:{type:String,required:true},

    description:String,
    image:{
        url:String,
        filename:String
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    category: {
        type: String,
        enum: ['beach', 'nature', 'rooms', 'citylife', 'mountain', 'arctic', 'farm', 'camping', 'castle'],
        required: true
      },

    geometry: {
        type: {
          type: String,       // Special nested syntax for 'type'
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],     // Must be [longitude, latitude]
          required: true
        }
      }
      
      
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
})

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;
