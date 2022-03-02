import * as React from 'react';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { conditionsMock } from './__mocks__/conditionsMock';
import { ConditionLabel } from './ConditionLabel';

afterEach(cleanup);

test('ConditionLabel', async () => {
  const { message, reason, status, type } = conditionsMock[0];

  const { asFragment, getByText } = render(
    <ConditionLabel message={message} reason={reason} status={status} type={type} />,
  );
  const firstRender = asFragment();

  expect(firstRender).toMatchSnapshot();

  // click on the condition to open popover
  fireEvent.click(getByText(`${reason}=${status}`));

  if (!message) return;

  const popoverMessage = await screen.findByText(message);

  expect(popoverMessage).toHaveTextContent(message);
});
