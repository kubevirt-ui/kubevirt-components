import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { printableVmStatus, VMIconStatus } from './VMIconStatus';

afterEach(cleanup);

describe('Render VMIconStatus', () => {
  Object.values(printableVmStatus).forEach((status) => {
    return it(status, () => {
      const { asFragment } = render(<VMIconStatus vmPrintableStatus={status} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
