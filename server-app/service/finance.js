import {finances} from '../model/finance.js';
import {ValidateError, ServerError} from '../Errors.js';

export const financeService = async ({money, isCome}) => {

    if (typeof money !== 'number' || typeof isCome !== 'boolean') {
        throw new ValidateError();
    }

    const mongoResponse = await finances.create({
        money: money,
        isCome: isCome,
    }).catch(() => {
        throw new ServerError('Data Base error');
    });

    return mongoResponse;
};