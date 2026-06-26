import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
    username: {type:String},
    password: {type:String}
})

export const Login = mongoose.model('adminLogin',LoginSchema);