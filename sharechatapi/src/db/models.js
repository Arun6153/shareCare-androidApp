var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name: String,
    Password: String,
    Age: Number,
    PhoneNo: Number,
    Email: String,
    /*Favorite: [{ type: Schema.Types.ObjectId, ref: 'Products' }],
    Chat: {
        ChatId: String,
        ChatType: String
    },
    History: {
        ActivityType: String
    }*/
});
var productSchema = new Schema({
    Name: String,
    Description: String,
    Price: Number,
    Location: String,
    ProductType: String,
    userID: { type: Schema.Types.ObjectId, ref: 'Users' }
});


module.exports.userModel = mongoose.model("Users", userSchema, "Users");
module.exports.productModel = mongoose.model("Products", productSchema, "Products");