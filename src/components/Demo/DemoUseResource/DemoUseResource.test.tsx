import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { DemoUseResource } from './DemoUseResource';

afterEach(cleanup);

const name = 'vm-example';
const namespace = 'default';
const errorText = 'Missing virtual machine data';
const dataTestID = 'DemoUseResourceTest';

test('Render DemoComponent (valid vm)', () => {
  const { asFragment } = render(
    <DemoUseResource
      name={name}
      namespace={namespace}
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoComponent (none valid vm)', () => {
  const { asFragment } = render(
    <DemoUseResource
      name="none"
      namespace="does-not-exist"
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
