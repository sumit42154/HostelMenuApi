import { UserVote } from "../Models/UserVote.js";
import { VoteCount } from "../Models/VoteCount.js";

export const addVote = async (req, res) => {
  try {
    const { deviceId, hostel, meal, vote } = req.body;

    const today = new Date().toISOString().split("T")[0];

    const user = await UserVote.findOne({ deviceId, hostel, date: today });
    if (user) {
      if (user[meal] !== "--") {
        return res
          .status(400)
          .json({
            message: "You have already voted for this meal",
            success: false,
          });
      }

      const updatedVote = await UserVote.findOneAndUpdate(
        { deviceId, hostel, date: today },
        { $set: { [meal]: vote } },
        { new: true },
      );
    }else{
        const userVote = new UserVote({ deviceId, hostel, date: today });
        userVote[meal] = vote;
        await userVote.save();
    }

    await VoteCount.findOneAndUpdate(
      { hostel, date: today },
      { $inc: { [`${meal}.${vote}`]: 1 } },
      { upsert: true, new: true }
    );
    
    res.status(200).json({ message: "Vote added successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const voteCount = async (req, res) => {
    try{
        const {hostel,date} = req.body;
        const voteData = await VoteCount.find({ hostel, date });
        return res.status(200).json({ data: voteData, success: true });

    }catch(error){
        res.status(400).json({ message: error.message ,success:false}) ;
    }
};
