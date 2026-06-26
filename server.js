import express from 'express';
import mongoose from 'mongoose';
import hostel3Router from './Routes/hostel3.js'
import hostel8Router from './Routes/hostel8.js'
import hostelLoginRouter from './Routes/LoginRoute.js'
import cors from 'cors';
import {config} from 'dotenv'


config({path:'./.env'});


const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGODB_URI,{
    dbName:'Mess_Hostels'
}).then(()=>console.log("Mongodb connected"))
.catch((err)=>console.log(err))




app.get('/', (req, res) => {
  res.json({
    message : "Welcome to Mess Menu API",
    success : true,
    data : null
  });
});


app.use('/api/hostel3',hostel3Router)
app.use('/api/hostel8',hostel8Router)
app.use('/api/hostel', hostelLoginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});