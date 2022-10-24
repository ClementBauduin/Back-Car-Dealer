import express from 'express';
const app = express();
import cors from "cors";
import mongoose from 'mongoose';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config()
import router from './src/router.js';


app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use(router)

mongoose.connect(process.env.MONGO_URI).then( () => {
    app.listen(process.env.PORT || 5000,() => console.log("Server on"))
})