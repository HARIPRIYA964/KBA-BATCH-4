import { Schema } from "mongoose";
import { model } from "mongoose";

const demo = new Schema({
    firstName:String,
    lastName:String,
    userName:{type:String,required:true,unique:true},
    password:String,
    userRole:{type:String,required:true,unique:true},
})
const sample = new model('User',demo)

const admin = new Schema({
    courseName:{type:String,required:true,unique:true},
    courseId:String,
    courseType:String,
    description:String,
    price:String,
    image:String
})
const sample1 = new model('Courses',admin)
export {sample,sample1}