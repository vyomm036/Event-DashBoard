// In server/server.js, initialize the server and connect to MongoDB.

import express from 'express';
const json = express.json;
import cors from 'cors';
import { connect } from 'mongoose';
import eventRoute from './routes/eventRoute.js';

const app = express();
const port = 4000;

app.use(cors());

app.use(json());

// Connect to MongoDB
connect('mongodb+srv://admin:admin@cluster0.6dm1dio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) =>
        console.error('Failed to connect to MongoDB', error));

// Define your routes here
app.use('/events', eventRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});