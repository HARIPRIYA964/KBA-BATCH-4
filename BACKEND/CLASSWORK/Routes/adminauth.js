import { Router } from 'express'
import authenticate from '../MiddleWare/auth.js'

const adminauth = Router()
const course = new Map()

adminauth.post('/addCourse',authenticate,(req,res)=>{
    try{
     if(req.Userrole == 'Admin'){
   
       const {CourseName,CourseId,CourseType,Description,Price} = req.body
       if(course.get(CourseName)){
         res.status(400).json({message:"Bad request"})
       }
       else{
         
         course.set(CourseName,{CourseId,CourseType,Description,Price})
         res.status(201).json({message:`${CourseName} successfully added`})
         
         
       }
      }
      else{
       res.status(401).json({message:"You are not allowed to add course"})
      }
     }
   
    catch{
     res.status(500).json({message:"Internal server error"})
    }
   
     
   })

  //  adminauth.get('/getcourse/:CourseName',(req,res)=>{
  //   const courseName=req.params.CourseName
  //   console.log(courseName);
  //   if(course.get(courseName)){
  //     console.log(course.get(courseName))
  //     res.status(200).json(course.get(courseName))
      
  //   }else{
  //     res.status(400).json({message:'Course not available'})
     
        
  //   }
    
  //  })
   adminauth.get('/getcourse',(req,res)=>{
    const name=req.query.CourseName
    if(course.get(name)){
      console.log(course.get(name))
      res.status(200).json(course.get(name))
    }
    else{
      res.status(400).json({message:'Course not available'})
    }
    
   })
  adminauth.put('/updatecourse',authenticate,(req,res)=>{
    if(req.Userrole=='Admin'){
      const{CourseName,CourseId,CourseType,Description,Price}=req.body
      if(course.get(CourseName))
      course.set(CourseName,{CourseId,CourseType,Description,Price})
      res.status(201).json({message:'Course updated successfully'})
    }else{
      res.status(403).json('Course does not exist')
    }
      
    
  })
  adminauth.patch('/editcourse',authenticate,(req,res)=>{
    if(req.Userrole=='Admin'){
      const{CourseName,CourseType,Price}=req.body
      console.log(CourseType);
      const result=course.get(CourseName)
      console.log(result);
      if(result){
        course.set(CourseName,{CourseId:result.CourseId,CourseType,Description:result.Description,Price})
        res.status(201).json({message:'Course updated successfully'})
        console.log(course.get(CourseName));
        
      }else{
        res.status(403).json({message:'Course does not exist'})
      }
    }else{
      res.status(403).json({message:'you are not allowed'})
    }
      
  })

  adminauth.delete('/deletecourse',(req,res)=>{
 try{
  const name = req.query.CourseName
  console.log(name)
  if(course.get(name)){
    course.delete(name)
    res.status(200).json({message:'Course deleted successfully'})
  }
  else{
    res.status(400).json({message:'Course not available'})
    }
  }
  catch(err){
    res.status(500).json({message:'Error deleting course'})
    }
})
 

   export default adminauth;  //export the router
   
