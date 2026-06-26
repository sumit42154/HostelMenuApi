import mongoose from "mongoose";

const Hostel3Schema = new mongoose.Schema({
    day: {type:String},
    breakfast: {type:String},
    lunch: {type:String},
    eveningTea: {type:String},
    dinner: {type:String}
})

export const Hostel3 = mongoose.model('Hostel3',Hostel3Schema);