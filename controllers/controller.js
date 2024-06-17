
const USER = require("../model/userschema")
const mongoose = require("mongoose")

exports.createuser = async(req,res) =>{
    try{
        const {name,email} = req.body
        if(!name || !email){
            throw new Error("all feild needs to be filled")
        }
        const userExists = await USER.findOne({email})

        if(userExists){
            throw new Error ("User already exists")
        }

        const user = await USER.create({
            name,email
        })
        res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        })
    }catch(error){
        res.status(400).json({
            success:false,
            meaasage:error.message
        })
    }
}

exports.edituser = async(req,res) => {
    try{
        const userid = req.params.id
         // Convert the user ID string to a MongoDB ObjectId
        const filter = { _id: new mongoose.Types.ObjectId(userid) };
        const user = await USER.findOneAndUpdate(filter,req.body, { new: true })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"user update successfully",
            user
        })

    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteuser = async(req,res) =>{
    try{
        const userid = req.params.id
        const user = await USER.findByIdAndDelete(userid)
        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"error.message"
        })
    }
}

exports.getuser = async(req,res) =>{
    try{
        const user = await USER.find({})
        res.status(200).json({
            success:true,
            user
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message,

        })
    }
}