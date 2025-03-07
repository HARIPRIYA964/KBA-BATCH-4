import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

const authenticate =(req,res,next)=>{
    const cookie = req.headers.cookie;
    console.log(cookie);
    const [name,token] = cookie.trim().split('=');
    console.log(name)
    console.log(token)
    if(name=='authToken'){
       const verified = jwt.verify(token,process.env.SECRET_KEY)
       console.log(verified)
       req.Username = verified.userName;
       req.Userrole = verified.userRole;
       console.log(req.Username);
       console.log(req.Userrole);
       
       next();     //go to next function
       //break;
    }
    else{
        res.status(401).json({message:" Unauthorized"});
    }
    
}
export default authenticate