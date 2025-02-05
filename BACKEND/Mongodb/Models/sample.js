import { Schema }  from "mongoose";
import { model } from "mongoose";

const demo=new Schema({
    userid:{type:String,require:true},
    name:{type:String,require:true},
    dob:{type:String,require:true},
})
const sample = model('sample1',demo)

export {sample}