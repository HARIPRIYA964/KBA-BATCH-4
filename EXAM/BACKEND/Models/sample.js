import { Schema } from "mongoose";
import { model } from "mongoose";

const InventorySchema = new Schema({
    itemName:String,
    category:{type:String,unique:true,required:true},
    quantity:String,
    price:String
})

const Inventory = new model('Item Details',InventorySchema)

export {Inventory}