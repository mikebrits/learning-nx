import React from 'react';
import { render, cleanup } from 'react-testing-library';

import WordInput from './WordInput';

describe(' WordInput', () => {
    afterEach(cleanup);

    it('should render successfully', () => {
        const { baseElement } = render(<WordInput />);
        expect(baseElement).toBeTruthy();
    });
});
