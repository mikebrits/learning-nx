import { Router } from 'express';
import { Word } from '@nx-test/interfaces';
import { getWords, addWord } from '../controllers/Words.controller';

const routes = Router();

routes.get('/', async (req, res) => {
    const data: [Word?] = await getWords(req.query.user);
    res.send(data);
});

routes.post('/', async (req, res) => {
    const data: Word = await addWord(req.body);
    res.send(data);
});

export default routes;
