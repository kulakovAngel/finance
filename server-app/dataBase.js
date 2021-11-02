import {MongoClient} from 'mongodb';

export const client = new MongoClient(
    'mongodb+srv://finance:finance@cluster0.zgbub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
);
client.connect();

export const db = client.db('finance');