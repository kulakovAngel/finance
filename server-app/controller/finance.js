import express from 'express';
import {financeService} from '../service/finance.js';

const financeRouter = express.Router();

financeRouter.post('/', async (request, response, next) => {
    const {money, isCome} = request.body;

    try {
        const mongoResponse = await financeService.add({
            money,
            isCome,
        });
        const data = await financeService.getAllMoney();
        return response.json(data);
    } catch (error) {
        return next(error);
    }
});

financeRouter.get('/', async (request, response, next) => {
    try {
        const data = await financeService.getAllMoney();
        return response.json(data);
    } catch (error) {
        return next(error);
    }
});

export const financeController = financeRouter;