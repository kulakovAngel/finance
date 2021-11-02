import {db} from '../dataBase.js';
import {Model} from './BaseModel.js';

class Finances extends Model {
    constructor(dataBase) {
        super(dataBase, 'money');
    }
}

export const finances = new Finances(db);