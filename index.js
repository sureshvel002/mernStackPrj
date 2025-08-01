import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoute from './routes/todoroute.js';

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/todos', todoRoute);

const mongodb = "mongodb+srv://sureshvdm02:sureshvdm@cluster0.hiamz3a.mongodb.net/todo-appdb?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Welcome to smart server');
});

const PORT = process.env.PORT || 8080;

// Set strictQuery to suppress the deprecation warning
mongoose.set('strictQuery', true);

// Connect to MongoDB without the deprecated options
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch(err => console.log(err));