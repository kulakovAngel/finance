import express from 'express';
import cors from 'cors';
import {db} from './dataBase.js';

import {financeController} from './controller/finance.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(express.json());

app.use(financeController);

app.use(async (err, req, res, next) => {
    console.error(err.message);
    res.status(err.status).send(err.message + '!');
});

app.listen(5000);