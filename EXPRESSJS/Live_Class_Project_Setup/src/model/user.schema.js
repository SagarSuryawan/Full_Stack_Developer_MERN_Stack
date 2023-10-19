import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        // name and lastname are two ways
        // required is for must fill last otherwise it not store in db.
        // maxlength is for character should be less than 50 
        // unique is for unique email store in db
        name:String,
        size:String,
        lastname:{
            type:string,
            required:[true,'Lastname is required'],
            maxLength:[50,'lastname should be less than 50']
        },
        email:{
            type:String,
            unique:true
        },
        username:{
            type:String,
            unique:true
        }
    }
    );

export default mongoose.model("User",userSchema)