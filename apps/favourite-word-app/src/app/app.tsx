import React, { useEffect, useState } from 'react';
import './app.css';
import { getUserId } from '../utils/UserID';
import WordInput from '../components/word-input/WordInput';
import { getWords, submitWord } from '../api/app-api';
import WordList from '../components/word-list/word-list';
import { Word } from '@nx-test/interfaces';
// import {submitWord} from '../api/app-api';

export const App = () => {
    const [id, setId] = useState('');
    const [words, setWords] = useState<[Word] | null>(null);

    useEffect(() => {
        getUserId().then(async _id => {
            setId(_id);
            const _words = await getWords(_id);
            setWords(_words);
        });
    }, []);

    const handleSubmitWord = async (word: string) => {
        await submitWord({ word, id });
    };

    if (!id) return 'Initialising...';

    return (
        <div>
            <header style={{ textAlign: 'center' }}>
                <h1>Tell us your favourite word?</h1>
                <WordInput onSubmit={handleSubmitWord} />
                <WordList words={words}/>
            </header>
        </div>
    );
};

export default App;
