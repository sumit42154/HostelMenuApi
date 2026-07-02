import mongoose from 'mongoose';

const UserVoteSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    hostel: { type: String, required: true },
    date: { type: String,
         default: () => new Date().toISOString().split('T')[0] },
    breakfast: { type: String, default: '--' },
    lunch: { type: String, default: '--' },
    eveningTea: { type: String, default: '--' },
    dinner: { type: String, default: '--' }
});

export const UserVote = mongoose.model('UserVote', UserVoteSchema);