import { cleanup } from '@testing-library/react';

import { vmMock } from './__mocks__/vmMock';
import { externalLogic } from './extrenalLogic';

afterEach(cleanup);

test('externalLogic', () => {
  const conditions = externalLogic(vmMock, true, null);

  expect((conditions || []).length).toBe(1);
});

test('externalLogic (not loaded yet)', () => {
  const conditions = externalLogic(vmMock, false, null);
  expect(conditions).toBe(null);
});

test('externalLogic (data error)', () => {
  const conditions = externalLogic(vmMock, true, 'Error loading data');

  expect(conditions).toBe(null);
});
