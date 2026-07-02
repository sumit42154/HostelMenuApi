import mongoose from "mongoose";

const VoteCountSchema = new mongoose.Schema({
    hostel: { type: String, required: true },
    date: { type: String, required: true, default: () => new Date().toISOString().split('T')[0] },
    breakfast: {
        "good": { type: Number, default: 0 },
        "bad": { type: Number, default: 0 },
        "skipped": { type: Number, default: 0 },
    },    
    lunch: {
        "good": { type: Number, default: 0 },
        "bad": { type: Number, default: 0 },
        "skipped": { type: Number, default: 0 },
    },
    eveningTea: {
        "good": { type: Number, default: 0 },
        "bad": { type: Number, default: 0 },
        "skipped": { type: Number, default: 0 },
    },
    dinner: {
        "good": { type: Number, default: 0 },
        "bad": { type: Number, default: 0 },
        "skipped": { type: Number, default: 0 },
    }
});

export const VoteCount = mongoose.model('VoteCount', VoteCountSchema);