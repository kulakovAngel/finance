import express from 'express';
import cors from 'cors';
import {db} from './dataBase.js';
import {financeController} from './controller/finance.js';
import {ServerError} from './Errors.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

// app.use((req, res, next) => {
//     res.set('Content-Type', 'application/json')
//     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.set('Access-Control-Allow-Headers', 'content-type');
//     next();
// });

app.use(express.json());

app.use('/money', financeController);

app.use(async (err, req, res, next) => {
    console.error(err.message);
    console.error(err.stack);
    if (!err.status) {
        err = new ServerError();
    }
    return res.status(err.status).send(err.message);
});

app.listen(5000);