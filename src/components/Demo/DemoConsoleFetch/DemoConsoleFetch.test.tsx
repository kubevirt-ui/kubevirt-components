import * as React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import { DemoConsoleFetch } from './DemoConsoleFetch';

afterEach(cleanup);

const name = 'vm-example';
const namespace = 'default';
const errorText = 'Missing virtual machine data';
const dataTestID = 'DemoUseResourceTest';

test('Render DemoConsoleFetch (valid vm)', async () => {
  const { asFragment } = render(
    <DemoConsoleFetch
      name={name}
      namespace={namespace}
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );

  await screen.findByTestId(dataTestID);
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoConsoleFetch (none valid vm)', async () => {
  const { asFragment } = render(
    <DemoConsoleFetch
      name="does-not-exist"
      namespace="default"
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );

  await screen.findByTestId(`${dataTestID}-bad-response`);
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoConsoleFetch (missing vm)', async () => {
  const { asFragment } = render(
    <DemoConsoleFetch
      name="does-not-exist"
      namespace="does-not-exist"
      errorText={errorText}
      dataTestID={dataTestID}
    />,
  );

  await screen.findByTestId(`${dataTestID}-error`);
  expect(asFragment()).toMatchSnapshot();
});
