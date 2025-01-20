import { Router } from "express";

const userauth = Router();

userauth.get('/',(req,res)=>{
    res.send("Hello EveryOne")
})

export {userauth}