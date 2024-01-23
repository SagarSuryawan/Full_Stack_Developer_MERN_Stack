
const User = require("../model/userSchema.js")


exports.createUser = async(req,res) =>{
    
    try {
        const {name,address,phone} = req.body

        if(!phone || !name){
            throw new Error("please fill required feild")
        }

        const userExists = await User.findOne({phone})

        if(userExists){
            throw new Error("user already exixts")
        }

        const users = await User.create({
            name,
            address,
            phone
        })

        res.status(200).json({
            success:true,
            message:"user created successfully",
            users
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            meaasage:error.message
        })
    }
}
// creatuser

exports.editUser = async(req,res) =>{
    try {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId,req.body)
        res.status(200).json({
            success:true,
            message:"user updated successfully",
            user
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message:error.message,
            
        })
    }
}
// edituser

exports.deleteUser = async(req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        res.status(200).json({
        success:true,
        message:"user delete successfully"
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.meaasage
        })
        
    }
    
}
// deleteUser

exports.getAllUser = async(req,res) =>{
    try {
        const users = await User.find({})
        res.status(200).json({
            success:true,
            message:"Successful",
            users
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message        
        })
    }
}
// getAllUser

