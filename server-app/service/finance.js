import {finances} from '../model/finance.js';
import {ValidateError, ServerError} from '../Errors.js';

class FinanceService {
    constructor(model) {
        this.model = model;
    }

    async add({money, isCome}) {
        if (typeof money !== 'number' || typeof isCome !== 'boolean') {
            throw new ValidateError();
        }

        const mongoResponse = await this.model.create({
            money: money,
            isCome: isCome,
        }).catch(() => {
            throw new ServerError('Data Base error');
        });

        return mongoResponse;
    }

    async getAllMoney() {
        return await this.model.getAll();
    }
}

export const financeService = new FinanceService(finances);