import { Router } from "express";
import { Inventory } from "../Models/sample.js";
import dotenv from 'dotenv'

dotenv.config();

const userauth = Router();

userauth.post(('/additem'),async(req,res)=>{
   
    try{
        const {ItemName,Category,Quantity,Price} = req.body
        const existingItem = await Inventory.findOne({itemName:ItemName})
        if(existingItem){
            res.status(400).json({message:'Items already exist'})
        }
        else{
            const newItem = new Inventory({
                itemName:ItemName,
                category:Category,
                quantity:Quantity,
                price:Price
            })
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
    const result = await Inventory.findOne({category:item})
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