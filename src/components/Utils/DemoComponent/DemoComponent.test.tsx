import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { demoMock } from './__mocks__/demoMock';
import { vmMock } from './__mocks__/vmMock';
import { DemoComponent, externalLogicData } from './DemoComponent';

afterEach(cleanup);

test('Render DemoComponent (valid vm)', () => {
  const { asFragment } = render(
    <DemoComponent name={demoMock.name} namespace={demoMock.namespace} />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Render DemoComponent (none valid vm)', () => {
  const { asFragment } = render(<DemoComponent name="none" namespace="does-not-exist" />);
  expect(asFragment()).toMatchSnapshot();
});

test('externalLogicData', () => {
  const conditions = externalLogicData([vmMock, true, null]);

  expect((conditions || []).length).toBe(1);
});

test('externalLogicData (not loaded yet)', () => {
  const conditions = externalLogicData([vmMock, false, null]);

  expect(conditions).toBe(null);
});

test('externalLogicData (data error)', () => {
  const conditions = externalLogicData([vmMock, true, 'Error loading data']);

  expect(conditions).toBe(null);
});
