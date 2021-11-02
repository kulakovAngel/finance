import express from 'express';
import {financeService} from '../service/finance.js';

const financeRouter = express.Router();

financeRouter.post('/', async (request, response, next) => {
    const {money, isCome} = request.body;

    try {
        const data = await financeService({
            money,
            isCome,
        });
        return response.json(data);
    } catch (error) {
        return next(error);
    }
});

export const financeController = financeRouter;