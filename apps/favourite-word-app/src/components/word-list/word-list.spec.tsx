import React from 'react';
import { render, cleanup } from 'react-testing-library';

import WordList from './word-list';

describe(' WordList', () => {
    afterEach(cleanup);

    it('should render successfully', () => {
        const { baseElement } = render(<WordList />);
        expect(baseElement).toBeTruthy();
    });
});
