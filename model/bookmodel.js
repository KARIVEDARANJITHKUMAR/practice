const mongoose = require("mongoose")

const bookSchemaRules = {
    bookName :{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    }
}

const bookSchema = new mongoose.Schema(bookSchemaRules);
const bookModel = mongoose.model("books",bookSchema);

module.exports = bookModel