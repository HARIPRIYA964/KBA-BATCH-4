import express,{json} from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userauth.js';
import adminauth from './Routes/adminauth.js';
import { adminsign } from './Routes/adminsign.js';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.Port

const app = express();  
app.use(json());
app.use('/',userauth);
app.use('/',adminauth);
app.use('/admin',adminsign);
app.use('/api',adminauth);

// app.get('/',function(req,res){
//     res.send('Hello World');

// })
mongoose.connect('mongodb://localhost:27017/KBA_COURSE').then(()=>{
    console.log('MongoDB connected successfully to KBA_COURSE');
})
.catch((error)=>{
    console.log('MongoDB connection failed:',error);
});

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
}) 