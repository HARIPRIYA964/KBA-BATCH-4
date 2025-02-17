import express,{json} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {userauth} from '../BACKEND/Routes/Userauth.js'

dotenv.config()
const port = process.env.Port

const app = express();

app.use(express.json());
app.use('/',userauth)

mongoose.connect('mongodb://localhost:27017/INVENTORY').then(()=>{
    console.log('MonogoDB connected successfully INVENTORY');
})
.catch((error)=>{
    console.log('MongoDB connection failed ',error);
    
})

app.listen(port,()=>{
    console.log(`Server running is ${port}`)
})