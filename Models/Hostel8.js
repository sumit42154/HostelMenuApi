import mongoose from "mongoose";

const Hostel8Schema = new mongoose.Schema({
    day: {type:String},
    breakfast: {type:String},
    lunch: {type:String},
    eveningTea: {type:String},
    dinner: {type:String}
})

export const Hostel8 = mongoose.model('Hostel8',Hostel8Schema);