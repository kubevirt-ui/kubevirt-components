import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { vmConditionsMock } from './__mocks__/vmConditionsMock';
import { ConditionLabelList } from './ConditionLabelList';

afterEach(cleanup);

test('Render ConditionLabelList', () => {
  const { asFragment } = render(<ConditionLabelList conditions={vmConditionsMock} />);
  expect(asFragment()).toMatchSnapshot();
});
