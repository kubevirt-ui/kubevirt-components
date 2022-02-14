import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { statuses, StatusIcon, statusToLabel } from './StatusIcon';

afterEach(cleanup);

describe('Render StatusIcon', () => {
  it('unknown condition', () => {
    const { asFragment } = render(<StatusIcon status="unknown status" />);
    expect(asFragment()).toMatchSnapshot();

    const title = statusToLabel[statuses.Unknown];
    screen.getByTitle(title);
  });

  Object.values(statuses).forEach((status) => {
    return it(`${status}`, () => {
      const { asFragment } = render(<StatusIcon status={status} />);
      expect(asFragment()).toMatchSnapshot();

      const title = statusToLabel[status];
      screen.getByTitle(title);
    });
  });

  it('data-test atrtibute added', () => {
    const dataTest = 'test-id';
    const { asFragment } = render(
      <StatusIcon status={statuses.Starting} data-test-id={dataTest} />,
    );
    expect(asFragment()).toMatchSnapshot();

    screen.getByTestId(dataTest);
  });

  it('spinning icon', () => {
    const { asFragment } = render(<StatusIcon status={statuses.Running} spin />);
    expect(asFragment()).toMatchSnapshot();
  });
});
