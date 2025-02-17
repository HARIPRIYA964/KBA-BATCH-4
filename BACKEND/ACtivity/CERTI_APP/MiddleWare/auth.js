import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req,res,next)=>{
    const cookie = req.headers.cookie;
    const [name,token] = cookie.trim().split('=');
    console.log(name)
    console.log(token);
    
    if(name == 'Token'){
        const verified = jwt.verify(token,process.env.SECRET_KEY);
        console.log(verified)
        req.UserName = verified.UserName;
        req.userrole = verified.UserRole;
        console.log(req.UserName)
        console.log(req.userrole);
        
        next();
    }
    else{
        res.status(401).json({message:'Unauthorized'})
    }

}

export default authenticate;