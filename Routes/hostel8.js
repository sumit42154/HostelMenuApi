import express from 'express'
import { addDay , updateMeal , showMealDay,showMealWeek } from '../Controllers/hostel8.js';

const router = express.Router();

router.post('/add',addDay);

router.post('/update',updateMeal);

router.post('/showmeal/day',showMealDay);

router.get('/showmeal/week',showMealWeek);


export default router;