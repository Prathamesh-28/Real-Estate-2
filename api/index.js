const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
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

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);