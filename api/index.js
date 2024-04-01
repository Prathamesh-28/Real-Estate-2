const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

dotenv.config();
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    });
const app = express();

app.use(express.json());
//app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from frontend origin


app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

//Creating middleware to throw error if user with same name email exist
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});