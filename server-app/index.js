import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import {financeController} from './controller/finance.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(express.json());

app.use(financeController);

app.listen(5000);

mongoose.connect('mongodb+srv://finance:finance@cluster0.zgbub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');