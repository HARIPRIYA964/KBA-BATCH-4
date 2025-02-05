import express,{json} from 'express'
import mongoose from 'mongoose'
import { router } from './Routes/route.js'

const app= express()
const port = 8000

app.use(express.json())
app.use('/',router)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
mongoose.connect('mongodb://localhost:27017/demo')