import { Hostel3 } from "../Models/Hostel3.js";


export const addDay = async (req, res) => {
    try {
        const { day, breakfast, lunch, eveningTea, dinner } = req.body;

        const days = await Hostel3.findOne({day});
        if(days) return res.json({
            message:"Day already exist"
        })

        const dayHostel = await Hostel3.create({ day, breakfast, lunch, eveningTea, dinner });

        return res.status(201).json({
            message: "Day added successfully",
            success: true,
            hostel: "Hostel 3",
            data: dayHostel,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const updateMeal = async (req, res) => {
    try {
        const { day, breakfast, lunch, eveningTea, dinner } = req.body;
        const days = await Hostel3.findOne({ day });
        if (!days) return res.json({
            message: "Day not found"
        });

        const updatedDay = await Hostel3.findOneAndUpdate(
            { day },
            { breakfast, lunch, eveningTea, dinner },
            { new: true }
        );

        return res.status(200).json({
            message: "Day updated successfully",
            success: true,
            hostel: "Hostel 3",
            data: updatedDay
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const showMealDay = async (req, res) => {
    try {
        const { day } = req.body;

        const days = await Hostel3.findOne({ day });
        if (!days) return res.json({
            message: "Day not found"
        });

        return res.status(200).json({
            message: "Day found",
            success: true,
            hostel: "Hostel 3",
            data: days
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const showMealWeek = async (req, res) => {
    try {
        const days = await Hostel3.find();
        if (!days || days.length === 0) return res.json({
            message: "No days found"
        });
        return res.status(200).json({
            message: "Days found",
            success: true,
            hostel: "Hostel 3",
            data: days
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
