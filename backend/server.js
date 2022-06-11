import productroute from './routes/products.js';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 4000;
dotenv.config({ path: './.env' });


app.use('/api/products', productroute);


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});



app.get('/', (req,res) => {
    res.send((P));
});
app.get('/api/courses', (req,res) => {
    res.send([1,2,3]);
});
app.listen(5000, () => console.log('Listening'))





