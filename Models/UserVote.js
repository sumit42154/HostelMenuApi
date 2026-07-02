import mongoose from 'mongoose';

const UserVoteSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    hostel: { type: String, required: true },
    date: { type: String,
         default: () => new Intl.DateTimeFormat("en-CA", { timeZone:'Asia/Kolkata' }).format(new Date()),required: true },
    breakfast: { type: String, default: '--' },
    lunch: { type: String, default: '--' },
    eveningTea: { type: String, default: '--' },
    dinner: { type: String, default: '--' },
    createdAt: { type: Date, default: Date.now , expires: '1d' }
});

export const UserVote = mongoose.model('UserVote', UserVoteSchema);