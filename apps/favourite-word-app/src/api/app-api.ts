import { SubmitWord, Word } from '@nx-test/interfaces';

const API_URL = 'http://localhost:3333/api/';

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const defaultOptions = {
    method: 'GET',
    headers: defaultHeaders
};

const request = (endpoint, options = {}) => {
    return fetch(API_URL + endpoint, { ...defaultOptions, ...options })
        .then(res => res.json())
        .catch(e => `There was a request error: ${e}`);
};

const get = url => request(url);

const post = (url, data) => {
    return request(url, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data)
    });
};

export const getWords = (user: string = ''): Promise<[Word]> => {
    return get(`words${user ? `?user=${user}` : ''}`);
};

export const submitWord = (word: SubmitWord): Promise<Word> => {
    return post('words', word);
};
