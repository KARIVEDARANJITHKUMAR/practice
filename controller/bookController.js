const bookModel = require("../model/bookmodel")
const {getAllFactory,
    getByIdFactory,
    postFactory,
    deleteFactory,updateFactory} = require("../utility/crudFactory")

const createBookHandler = postFactory(bookModel);
const getAllBooks = getAllFactory(bookModel);
const getBooksById = getByIdFactory(bookModel);
const deleteBookById = deleteFactory(bookModel);
const updateBookById = updateFactory(bookModel);

module.exports={
    createBookHandler,
    getAllBooks,
    getBooksById,
    deleteBookById,
    updateBookById
}