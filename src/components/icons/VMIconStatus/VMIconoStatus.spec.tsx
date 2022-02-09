import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { printableStatusToLabel, printableVmStatus, VMIconStatus } from './VMIconStatus';

afterEach(cleanup);

describe('Render VMIconStatus', () => {
  it(`No status specified`, () => {
    const { asFragment } = render(<VMIconStatus vmPrintableStatus={undefined} />);
    expect(asFragment()).toMatchSnapshot();

    const title = printableStatusToLabel[printableVmStatus.Unknown];
    screen.getByTitle(title);
  });

  Object.values(printableVmStatus).forEach((status) => {
    return it(`${status}`, () => {
      const { asFragment } = render(<VMIconStatus vmPrintableStatus={status} />);
      expect(asFragment()).toMatchSnapshot();

      const title = printableStatusToLabel[status];
      screen.getByTitle(title);
    });
  });
});
