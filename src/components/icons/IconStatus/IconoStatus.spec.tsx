import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { IconStatus, statuses, statusToLabel } from './IconStatus';

afterEach(cleanup);

describe('Render IconStatus', () => {
  it('unknown condition', () => {
    const { asFragment } = render(<IconStatus status="unknown status" />);
    expect(asFragment()).toMatchSnapshot();

    const title = statusToLabel[statuses.Unknown];
    screen.getByTitle(title);
  });

  Object.values(statuses).forEach((status) => {
    return it(`${status}`, () => {
      const { asFragment } = render(<IconStatus status={status} />);
      expect(asFragment()).toMatchSnapshot();

      const title = statusToLabel[status];
      screen.getByTitle(title);
    });
  });

  it('data-test atrtibute added', () => {
    const dataTest = 'test-id';
    const { asFragment } = render(<IconStatus status={statuses.Starting} data-test={dataTest} />);
    expect(asFragment()).toMatchSnapshot();

    screen.getByTestId(dataTest);
  });
});
