import { Router } from "express";
import { sample } from "../Models/sample.js";

const router = Router();

router.post('/create',async(req,res)=>{
    try{
        const data = req.body
        const result = await sample.create(data)
        res.status(201).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
})

router.get('/read',async(req,res)=>{
    try{
        const result = await sample.findById('67a1cc5b3f0cc27980af76db')
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
        }
})
export {router}