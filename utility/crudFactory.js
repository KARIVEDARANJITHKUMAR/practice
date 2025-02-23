const getAllFactory = function (ElementModel){
    return async function (req,res) {
        try{
             const elementDetails = await ElementModel.find()
        if(elementDetails.length == 0){
            throw new Error("No users found")
        }
        res.status(200).json({
            status:"success",
            message:elementDetails
        })}catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }
    }
}

const getByIdFactory =  function(ElementModel){
    return async function(req,res) {
        try{
            const elementId = req.params.elementId
            const ElementDetails = await ElementModel.findById(elementId)
            if(ElementDetails == null) {
                throw new Error(`no user found with ${elementId}`)
            }
            res.status(200).json({
                status:"Success",
                message:ElementDetails
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }
    }
}

const postFactory = function(ElementModel){
    return async function (req,res) {
        try{
            const elementdetails = req.body 
            const Element = await ElementModel.create(elementdetails);
            res.status(200).json({
                status:"success",
                message:`element added successfully`
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }        
    }
}

const deleteFactory = function(ElementModel){
    return async function (req,res) {
        let {elementId} = req.params
        try{
            let Element = await ElementModel.findByIdAndDelete(elementId)
            res.status(200).json({
                status:"success",
                message:`element with id:${elementId} deleted successfully`
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }
    }
}

const updateFactory = function(ElementModel){
    return async function (req,res) {
        let elementId = req.params.elementId
        try{
            let updateElement = await ElementModel.findByIdAndUpdate(elementId,req.body)
            if(updateElement == null){
                throw new Error(`element with id:${elementId} not found`)
            }
            res.status(200).json({
                status:"success",
                message:`updated the element successfully`
            })
        }catch(e){
            res.status(400).json({
                status:"failure",
                message:e.message
            })
        }        
    }
}

module.exports = {
    getAllFactory,
    getByIdFactory,
    postFactory,
    deleteFactory,
    updateFactory
}