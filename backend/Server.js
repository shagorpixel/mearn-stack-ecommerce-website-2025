import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Config/mongodb.js';
import connectCloudinary from './Config/cloudinary.js';

// App Config 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());
// Api endpoints

app.get('/',(req,res)=>{
    res.send("API Wroking");
})
app.listen(port,()=>console.log(`Your Server is Start on http://127.0.0.1:${port}`))