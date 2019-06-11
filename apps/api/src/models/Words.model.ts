import { SubmitWord, Word } from '@nx-test/interfaces';
import { db } from '../db';
import nanoid from 'nanoid';

export const findWordsForUser = (id: string): [Word?] => {
    return id
        ? db.get('words').filter(w => w.submittedBy === id)
        : db.get('words');
};

export const createWord = (word: SubmitWord): Word => {
    const newWord: Word = {
        id: nanoid(),
        submittedBy: word.id,
        word: word.word
    };

    db.get('words')
        .push(newWord)
        .write();

    return newWord;
};
