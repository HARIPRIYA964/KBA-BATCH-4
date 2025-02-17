import { Router } from "express";
import authenticate from "../MiddleWare/auth.js";
import { Certificate } from "../Models/sample.js";

const adminauth = Router();


adminauth.post('/addcerti',authenticate,async(req,res)=>{
    
    try{
       
        if(req.userrole == 'Admin'){
            
            const {CourseName,CertificateId,CandidateName,Grade,IssueDate} = req.body
            console.log(CertificateId);
           
            const result = await Certificate.findOne({certificateId:CertificateId})
            
            if(result){
                res.status(400).json({message:"Certificate already exists"})
            }
            else{
               const newCertificate =  new Certificate({
                courseName:CourseName,
                certificateId:CertificateId,
                candidateName:CandidateName,
                grade:Grade,
                issueDate:IssueDate
               })
               await newCertificate.save()
                res.status(200).json({message: " Successfully added"})
                  
                
            }
        }
    }
    catch(err){
        res.status(500).json({message:'inetrnal server error'})
        console.log(err);
        
    }
})

adminauth.get('/getcerti',async(req,res)=>{
    try{
        
        const Id = req.query.CertificateId
        console.log(Id)
        const result = await Certificate.find()
        if(result){
        
            res.status(200).json(result)
            console.log(result)
        }
        else{
            res.status(400).json({message:"Certificate not found"})
        }
    }
    catch(err){
        res.status(500).json({message:'inetrnal server error'})
        console.log(err)
        }
})



export {adminauth}
