import { Router } from 'express';
import { SubmitWord, Word } from '@nx-test/interfaces';

const routes = Router();

routes.get('/', (req, res) => {
    const data: [Word] = [
        {
            word: 'one',
            submittedBy: '123',
            id: '321'
        }
    ];
    const { user } = req.query;

    res.send(user ? data.filter(i => i.id === user) : data);
});

routes.post('/', (req, res) => {
    const body: SubmitWord = JSON.parse(req.body);

    const result: Word = {
        word: body.word,
        submittedBy: body.id,
        id: Math.floor(Math.random() * 100).toString()
    };

    res.send(result);
});

export default routes;
