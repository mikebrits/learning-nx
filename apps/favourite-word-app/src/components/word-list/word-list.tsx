import React from 'react';

import './word-list.css';
import { Word } from '@nx-test/interfaces';

/* tslint:disable:no-empty-interface */
export interface WordListProps {
    words?: [Word];
}

export const WordList = ({ words }: WordListProps) => {
    if (words === null) {
        return <div>No Words yet!</div>;
    }
    console.log('words', words);
    return (
        <ul>
            {words.map(({ word }, index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>
    );
};

export default WordList;
