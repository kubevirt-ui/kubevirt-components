import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { OSIcon, OSIconsEnum } from './OSIcon';

afterEach(cleanup);

describe('OSIcon', () => {
  it(`Render OSIcon`, () => {
    const icon = 'icon-linux';
    const iconTestId = 'testId';
    render(<OSIcon iconClass={icon as OSIconsEnum} data-test-id={iconTestId} />);
    screen.getByTestId(iconTestId);
    screen.getByAltText('linux');
  });

  it(`Render OSIcon with alt`, () => {
    const testAlt = 'alt';
    render(<OSIcon iconClass={OSIconsEnum.LINUX} alt={testAlt} />);
    screen.getByAltText(testAlt);
  });

  it(`Render OSIcon with unknown iconClass`, () => {
    const unknownIconClass = 'unknown';
    render(<OSIcon iconClass={unknownIconClass as OSIconsEnum} />);
    screen.getByAltText(unknownIconClass);
  });
});
