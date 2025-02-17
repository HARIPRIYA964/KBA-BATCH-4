import { Schema } from "mongoose";
import { model } from "mongoose";

const UserSchema = new Schema({
    firstName: String,
    lastName:String,
    userName:{type:String,required:true,unique:true},
    password:String,
    userRole:{type:String,required:true,unique:true}
})
const User= new model('User',UserSchema)

const CertiSchema = new Schema({
    courseName:String,
    certificateId:{type:String,unique:true,required:true},
    candidateName:String,
    grade:String,
    issueDate:String
})

const Certificate = new model('Certificate',CertiSchema)

export {User , Certificate}