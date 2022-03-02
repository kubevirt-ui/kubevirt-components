import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { conditionsMock } from './__mocks__/conditionsMock';
import { ConditionLabelList } from './ConditionLabelList';

afterEach(cleanup);

test('Render ConditionLabelList', () => {
  const { asFragment } = render(<ConditionLabelList conditions={conditionsMock} />);
  expect(asFragment()).toMatchSnapshot();
});
