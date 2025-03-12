import express,{json} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { userauth } from "./Routes/Userauth.js"

dotenv.config()

const Port = process.env.PORT ;

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials:true
        }
));
app.use('/',userauth)

mongoose.connect('mongodb://localhost:27017/Exam').then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
    })

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
