import {Finances} from '../model/finance.js';

export const financeService = async ({money, isCome}) => {

    if (typeof money !== 'number' || typeof isCome !== 'boolean') {
        return next(new Error('Incorrect data format!'));
    }

    // todo: remove mongoose call from service
    const newItem = await Finances.create({
        money: money,
        isCome: isCome,
    });
    console.log(newItem);
    return newItem;
};