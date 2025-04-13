const Joi=require("joi");


module.exports.listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow('', null),
    category: Joi.string().valid('beach', 'nature', 'rooms', 'citylife', 'mountain', 'arctic', 'farm', 'camping', 'castle', 'trending').optional()
});


module.exports.reviewSchema=Joi.object({
    rating:Joi.number().integer().required().min(1).max(5),
    comment:Joi.string().required().min(1).max(1000)
})