const mongoose = require('mongoose')
const ToySchema = mongoose.Schema({
    name: String,
    quantity: Number,
    image: String,
    price:Number,
    category: String
}
);
const ToyModel =mongoose.model("TOY",ToySchema,"asm");
//book:tên collection
module.exports = ToyModel;