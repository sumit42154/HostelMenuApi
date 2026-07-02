import express from "express";
import { addVote ,voteCount } from "../Controllers/userVote.js";

const router = express.Router();

router.post('/addvote', addVote);
router.post('/votecount', voteCount);

export default router;