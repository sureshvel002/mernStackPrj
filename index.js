import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoute from './routes/todoroute.js';
const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/todos',todoRoute);
const mongodb = "mongodb+srv://sureshvdm02:sureshvdm@cluster0.hiamz3a.mongodb.net/todo-appdb?retryWrites=true&w=majority";
app.get('/', (req, res) => {
    res.send('Welcome to smart server')
})
const PORT = process.env.PORT || 8000;
// mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
//     app.listen(3000);
//     console.log(`server is running on port 3000`)
// }).catch(err => console.log(err))
// const PORT = process.env.PORT || 5000;

// mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}).then(() => {
//     app.listen(5000,console.log(`server is running on port ${PORT}`))}).catch(err => console.log(err))

//deploy server
mongoose.connect(process.env.MDB, { useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    app.listen(8000,console.log(`server is running on port ${PORT}`))}).catch(err => console.log(err))
