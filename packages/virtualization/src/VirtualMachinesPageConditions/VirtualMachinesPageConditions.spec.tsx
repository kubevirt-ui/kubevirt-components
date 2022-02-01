import { render } from '@testing-library/react';
import React from 'react';
import { Label } from './VirtualMachinesPageConditions';

describe('Button', () => {
  test('renders the Button component', () => {
    const { container } = render(<Label k="k" v="v" m="m" />);
    expect(container).toMatchSnapshot();
  });
});
