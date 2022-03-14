import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { DemoUseResources } from './DemoUseResources';

afterEach(cleanup);

const name = 'vm-example';
const namespace = 'default';
const errorText = 'Missing virtual machine data';
const dataTestID = 'DemoUseResourceTest';

test('Render DemoUseResources (valid vm)', () => {
  const { asFragment } = render(
    <DemoUseResources
      name={name}
      namespace={namespace}
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoUseResources (none valid vm)', () => {
  const { asFragment } = render(
    <DemoUseResources
      name="none"
      namespace="does-not-exist"
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
