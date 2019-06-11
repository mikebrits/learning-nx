import { SubmitWord, Word } from '@nx-test/interfaces';
import { findWordsForUser, createWord } from '../models/Words.model';

export const getWords = (user: string = ''): [Word?] => {
    return findWordsForUser(user);
};

export const addWord = (word: SubmitWord): Word => {
    return createWord(word);
};
