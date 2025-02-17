import { Router } from 'express'
import authenticate from '../MiddleWare/auth.js'
import { sample1 } from '../Models/sample.js'
// import upload from '../MiddleWare/upload.js'
import { upload } from '../MiddleWare/upload1.js'

const adminauth = Router()

const convertBase64 = (Buffer)=>{
  return Buffer.toString('base64')
}

adminauth.post('/addCourse',authenticate,upload.single('couresImage'),async(req,res)=>{
    try{
     if(req.Userrole == 'Admin'){
   
       const {CourseName,CourseId,CourseType,Description,Price} = req.body
       console.log(CourseName)
       const existingCourse = await sample1.findOne({courseId:CourseId})
       
      //  const imagePath = req.file ? req.file.path:"";
       if(existingCourse){
        
         res.status(400).json({message:"Bad request"})
       }
       else{
        let imageBase64 = null;
        if(req.file){
          imageBase64 = convertBase64(req.file.buffer)
          }
         const newCourse = new sample1({
          courseName:CourseName,
          courseId:CourseId,
          courseType:CourseType,
          description:Description,
          price:Price,
          image:imageBase64
          })
          await newCourse.save()
         res.status(201).json({message:`${CourseName} successfully added`,data:newCourse})
         
         
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
   adminauth.get('/getcourse',async(req,res)=>{
    const name=req.query.CourseName
    const result = await sample1.findOne({courseName:name})
    if(result){
      const  imageBuffer = Buffer.from(result.image,"base64")
      // const imageUrl = result.image ? `http://localhost:8006${result.image}`: null
      // res.status(200).json({data:{...result.toObject(),imageUrl}})
      res.set({
        "Content-Type":"image/jpg",
        "Content-Disposition":"inline;filename=course.jpg"
      })
      res.send(imageBuffer)
     
    }
    else{
      res.status(400).json({message:'Course not available'})
    }
    
   })
  adminauth.put('/updatecourse',authenticate,async(req,res)=>{
    if(req.Userrole=='Admin'){
      const{CourseName,CourseId,CourseType,Description,Price}=req.body
      const result = await sample1.findOne({courseName:CourseName})
      if(result)
      
        result.courseId = CourseId
        result.courseType = CourseType
        result.description = Description
        result.price = Price
        
        await result.save()
      res.status(201).json({message:'Course updated successfully'})
    }else{
      res.status(403).json('Course does not exist')
    }
      
    
  })
  adminauth.patch('/editcourse',authenticate,async(req,res)=>{
    if(req.Userrole=='Admin'){
      const{CourseName,CourseType,Price}=req.body
      console.log(CourseType);
      const result= await sample1.findOne({courseName:CourseName})
      console.log(result);
      if(result){
       
        result.courseType = CourseType
        result.price = Price

        await result.save()
        res.status(201).json({message:'Course updated successfully'})
        console.log(result);
        
      }else{
        res.status(403).json({message:'Course does not exist'})
      }
    }else{
      res.status(403).json({message:'you are not allowed'})
    }
      
  })

  adminauth.delete('/deletecourse',async(req,res)=>{
 try{
  const name = req.query.CourseName
  console.log(name)
  const result = await sample1.findOne({courseName:name})
  if(result){
    await sample1.findOneAndDelete(result)
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
   
