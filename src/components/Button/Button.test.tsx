import React from 'react';

import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});
