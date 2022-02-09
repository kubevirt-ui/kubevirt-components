import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { IconStatus, statuses, statusToLabel } from './IconStatus';

afterEach(cleanup);

describe('Render VMIconStatus', () => {
  Object.values(statuses).forEach((status) => {
    return it(`${status}`, () => {
      const { asFragment } = render(<IconStatus status={status} />);
      expect(asFragment()).toMatchSnapshot();

      const title = statusToLabel[status];
      screen.getByTitle(title);
    });
  });
});
