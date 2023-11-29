import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { MongoClient, ServerApiVersion  } from 'mongodb';
import tourRoute from './routes/tours.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database Connection
const connection = process.env.MONGO_URI;
const client = new MongoClient(connection, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Koneksi ke MongoDB gagal:', error);
    } finally {
        await client.close();
        console.log('Koneksi ditutup.');
    }
}
run();


// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

app.listen(port, () => {
    console.log('Server listening on port', port);
})