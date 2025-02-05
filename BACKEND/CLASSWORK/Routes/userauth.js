import { Router } from "express";
import bcrypt from "bcrypt";  
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';


dotenv.config()
const userauth = Router();
const user = new Map()


// userauth.get('/',(req,res)=>{
//     res.send("Hello EveryOne")
// })

userauth.post('/signup' , async(req,res)=>{  
   try{
      
    const {FirstName,LastName,UserName,Password,UserRole}=req.body
    console.log(FirstName)
    const newPassword = await bcrypt.hash(Password, 10)
    console.log(newPassword)
    if(user.get(UserName)){
    res.status(400).json({message : "User Already Exist"})
    }
    else{
    user.set( UserName,{FirstName,LastName,Password:newPassword,UserRole})
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
    const result = user.get(UserName)
    if(!result){
        res.status(400).json({message : "User Not Found"})
    }
    else{
        const valid = await bcrypt.compare(Password,result.Password)   // login password and encrpted password
      //create a token

        if(valid){
            const token = jwt.sign({UserName:UserName,UserRole:result.UserRole},process.env.SECRET_KEY,{expiresIn:'1h'})
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