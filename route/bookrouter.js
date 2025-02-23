const express = require("express")

const {
    createBookHandler,
    getAllBooks,
    getBooksById,
    deleteBookById,
    updateBookById

} = require("../controller/bookController")

const BookRouter = express.Router()


const checkInput = function(req,res,next){
    if(req.method == "POST"){
        const userDetails = req.body;
        const isEmpty = Object.keys(userDetails).length == 0;
        if(isEmpty){
            res.status(404).json({
                status:"failure",
                message:"user Details are empty"
            })
        }
    }else{
        next();
    }
}

BookRouter.get("/",getAllBooks);
BookRouter.get("/:elementId",getBooksById);
BookRouter.post("/",checkInput,createBookHandler);
BookRouter.delete("/:elementId",deleteBookById);
BookRouter.put("/:elementId",updateBookById);

module.exports = BookRouter