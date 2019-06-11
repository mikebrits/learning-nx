import React, { useState } from 'react';
import './WordInput.css';

/* tslint:disable:no-empty-interface */
export interface WordInputProps {
    onSubmit: (word: string) => void;
}

export const WordInput = ({ onSubmit }: WordInputProps) => {
    const [word, setWord] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(word);
        setWord('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={word} onChange={e => setWord(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default WordInput;
