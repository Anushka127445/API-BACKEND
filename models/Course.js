const mongoose =require('mongoose');

//define the schema for the Course model
const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    duration:String,
    image:String,
    cloudinary_id:String,
});

module.exports= mongoose.model('Course', courseSchema);