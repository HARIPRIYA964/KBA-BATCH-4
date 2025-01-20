import express from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userauth';

dotenv.config();
const port = process.env.Port

const app = express();  

app.use('/',userauth)

// app.get('/',function(req,res){
//     res.send('Hello World');

// })




app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
}) 