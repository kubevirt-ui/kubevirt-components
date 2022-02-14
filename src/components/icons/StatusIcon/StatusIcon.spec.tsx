import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { statuses, StatusIcon, statusToLabel } from './StatusIcon';

afterEach(cleanup);

describe('Render StatusIcon', () => {
  it(`No status specified`, () => {
    const { asFragment } = render(<StatusIcon vmPrintableStatus={undefined} />);
    expect(asFragment()).toMatchSnapshot();

    const title = statusToLabel[statuses.Unknown];
    screen.getByTitle(title);
  });

  Object.values(statuses).forEach((status) => {
    return it(`${status}`, () => {
      const { asFragment } = render(<StatusIcon vmPrintableStatus={status} />);
      expect(asFragment()).toMatchSnapshot();

      const title = statusToLabel[status];
      screen.getByTitle(title);
    });
  });
});
