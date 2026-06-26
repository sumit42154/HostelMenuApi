import {Login} from '../Models/Login.js';


export const register = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user = await Login.findOne({username});
        if(user) return res.json({
            message:"User already exists"
        })
        const newUser = new Login({username,password});
        await newUser.save();
        res.json({
            message:"User registered successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const login = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user = await Login.findOne({username,password});
        if(!user) return res.json({
            message:"Invalid username or password"
        })
        res.json({
            message:"Login successful",
            success:true,
            data:user.username
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}