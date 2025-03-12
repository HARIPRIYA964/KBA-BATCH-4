import { Router } from "express";
import { Inventorys } from "../Models/sample.js";
import dotenv from 'dotenv'

dotenv.config();

const userauth = Router();

userauth.post(('/additem'),async(req,res)=>{
    try{
        const {ItemName,Category,Quantity,Price} = req.body
        console.log(ItemName,Category,Quantity,Price);
        
        const existingItem = await Inventorys.findOne({ ItemName: ItemName})
        console.log(existingItem)
        if(existingItem){
            res.status(400).json({message:'Items already exist'})
        }
        else{
            const newItem = new Inventorys({ItemName,Category,Quantity,Price})
            await newItem.save();
            res.status(200).json({message:'Successfully added'})
        }
    }
    catch(err){
        console.log(err)
    }
})
   

userauth.get(('/getItem'),async(req,res)=>{
    const item = req.query.Category
    const result = await Inventorys.findOne({category:item})
    if(result){
        res.status(200).json(result)
        console.log(result);
        
    }
    else{
        res.status(400).json({message:'The category is not avaliable'})
    }

})


userauth.put(('/updateItem'),async(req,res)=>{
    const {ItemName,Category,Quantity,Price} = req.body
    const result = await Inventory.findOne({itemName:ItemName})
    console.log(result)
    if(!result){
        res.status(400).json({message:'not avaliable'})
    }
    else{
        const updateItem = new Inventory({
            itemName:result.category = Category,
            quantity:result.quantity= Quantity,
            price:result.price = Price
        })
        await updateItem.save()
        res.status(200).json({message:'successfully updated'})
       
    }
    })

userauth.delete('/delete',async(req,res)=>{
    const item = req.query.Category
    const result = await Inventory.findOne({category:item})
    if(result){
        await Inventory.findOneAndDelete(result)
        res.status(200).json({message:"successfully Deleted"})
    }
})


export {userauth}