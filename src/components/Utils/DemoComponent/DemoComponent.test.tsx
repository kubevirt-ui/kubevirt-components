import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { demoMock } from './__mocks__/demoMock';
import { DemoComponent, DemoComponentDefaults } from './DemoComponent';

afterEach(cleanup);

test('Render DemoComponent (valid vm)', () => {
  const { asFragment } = render(
    <DemoComponent
      name={demoMock.name}
      namespace={demoMock.namespace}
      errorText={DemoComponentDefaults.errorText}
      dataTestID={DemoComponentDefaults.dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoComponent (none valid vm)', () => {
  const { asFragment } = render(
    <DemoComponent
      name="none"
      namespace="does-not-exist"
      errorText={DemoComponentDefaults.errorText}
      dataTestID={DemoComponentDefaults.dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
