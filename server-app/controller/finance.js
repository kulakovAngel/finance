import express from 'express';
import {financeService} from '../service/finance.js';

const financeRouter = express.Router();

financeRouter.post('/', async (request, response, next) => {
    const {money, isCome} = request.body;
    const data = await financeService({
        money,
        isCome,
    });
    response.json(data);
});

export const financeController = financeRouter;