import { Router } from "express";
import bcrypt from "bcrypt";  
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { sample } from "../Models/sample.js";


dotenv.config()
const userauth = Router();

// userauth.get('/',(req,res)=>{
//     res.send("Hello EveryOne")
// })

userauth.post('/signup',async(req,res)=>{  
   try{
      
    const {FirstName,LastName,UserName,Password,UserRole}=req.body
    console.log(FirstName)
   
    const existingUser = await sample.findOne({userName:UserName})
    console.log(existingUser)
    if(existingUser){
    res.status(400).json({message : "User Already Exist"})
    }
    else{
      const newPassword = await bcrypt.hash(Password, 10)
      console.log(newPassword)

      const newUser = new sample({
        firstName:FirstName,
        lastName:LastName,
        userName:UserName,
        password:newPassword,
        userRole:UserRole
      })
      console.log(newUser);
      
      await newUser.save()
    res.status(201).json({message : "Sign Up Successfully"})
    }
   }
    catch{
        res.status(500).json({message:"Internal Server Error"});
    }

})

userauth.post('/login', async (req,res) =>{
 
    
   try{
    const{UserName,Password} = req.body
    const result = await sample.findOne({userName:UserName})
    if(!result){
        res.status(400).json({message : "User Not Found"})
    }
    else{
        const valid = await bcrypt.compare(Password,result.password)   // login password and encrpted password
      //create a token

        if(valid){
            const token = jwt.sign({userName:UserName,userRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            res.cookie('authToken',token,{
              httpOnly: true   //security purpose 
            })
            res.status(201).json({message : "Login Successfully"})
            }
            else{
              res.status(401).json({message:"Unauthorized password"})
              
                
                }
    }
   }
   catch{
    res.status(500).json({message: "Internal server error"})
   }
})

userauth.get('/logout',(req,res)=>{
  res.clearCookie('authToken')
  res.status(200).json({message : "Logout Successfully"})
})


export {userauth}