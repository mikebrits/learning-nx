import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Components from './components';

describe(' Components', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Components />);
    expect(baseElement).toBeTruthy();
  });
});
