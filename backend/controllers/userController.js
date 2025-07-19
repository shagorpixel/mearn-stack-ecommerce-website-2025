// controller for user login
import validator from "validator"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userModel from './../models/userModel.js';


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User doesn't exists"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch){
        const token = createToken(user._id);
        res.json({success:true,token})
    }else{
        res.json({success:false,message:"Invalid Password"})
    }
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}
// controller for user Register
const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        // cheecking user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        //validationg email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Your Password Must Be 8 Charector"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name,
            email,
            password:hashPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success:true,token})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
// constroller for admin login
const adminLogin = async(req,res)=>{

}
export {loginUser,registerUser,adminLogin}