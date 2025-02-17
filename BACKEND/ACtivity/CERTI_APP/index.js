import express,{json} from 'express';
import dotenv from 'dotenv';
import { adminRoute } from './Routes/adminRoute.js';
import { adminauth } from './Routes/adminAuth.js';
import mongoose from 'mongoose';

dotenv.config();
const Port = process.env.Port

const app = express();
app.use(json());
app.use('/', adminRoute);
app.use('/', adminauth);

mongoose.connect('mongodb://localhost:27017/CERTI_APP').then(()=>{
    console.log('MongoDB connected successfully to CERTI_APP')
})
.catch((error)=>{
    console.log('MongoDB connection failed:',error)
})

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
