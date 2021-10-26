import express from 'express';
import cors from 'cors';

const finances = [];

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

app.use(express.json());

app.get('/', (request, response, next) => {
    console.log(request.url);
    response.send('Hello, finance app!');
});

app.post('/', (request, response, next) => {
    finances.push(request.body);
    console.log(finances);
    response.json(finances);
});

app.listen(5000);