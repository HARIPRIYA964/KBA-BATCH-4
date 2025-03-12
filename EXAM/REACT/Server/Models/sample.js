import { Schema } from "mongoose";
import { model } from "mongoose";

const InventorySchema = new Schema({
    ItemName:{type:String,unique:true},
    Category:String,
    Quantity:Number,
    Price:Number
})

const Inventorys = new model('InventoryDetails',InventorySchema)

export {Inventorys}