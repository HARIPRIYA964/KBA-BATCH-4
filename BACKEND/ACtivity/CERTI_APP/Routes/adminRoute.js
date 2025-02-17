import {Router} from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../Models/sample.js';

dotenv.config();
const adminRoute = Router();


adminRoute.post('/signup',async(req,res)=>{
   try{
    const {FirstName,LastName,UserName,Password,UserRole} = req.body;
    const result = await User.findOne({userName:UserName})
    if(result){
        res.status(400).json({message:"User already exist"});
    }
    else{
        const newPasswod = await bcrypt.hash(Password,10);
        const newUser = new User({
            firstName:FirstName,
            lastName:LastName,
            userName:UserName,
            password:newPasswod,
            userRole:UserRole
        })
        await newUser.save()
        res.status(201).json({message:"User Signup successfully"});
    }
}
catch{
    res.status(500).json({message:"Internal Server Error"});
}
})

adminRoute.post('/login',async(req,res)=>{
    try{
        const {UserName,Password} = req.body;
        const result = await User.findOne({userName:UserName});
        if(!result){
            res.status(400).json({message:"User not found"});
            }
            else{
                const valid = await bcrypt.compare(Password,result.password)
                if(valid){
                    const token = jwt.sign({userName:UserName,userRole:result.userRole},process.env.SECRET_KEY,{expiresIn:"1h"});
                    res.cookie('Token',token,{
                        httpOnly:true
                    })
                    res.status(201).json({message:"Login Successfully"})
                }
                else{
                    res.status(400).json({message:"Invalid Password"})
                    }
          
                    }
                    }
                    catch(error){
                        res.status(500).json({message:"Internal Server Error"});
                        console.log(error)
                        }
                        })

adminRoute.get('/logout',(req,res)=>{
    res.clearCookie('Token')
    res.status(201).json({message:"Logout Successfully"});
})

  
export {adminRoute}