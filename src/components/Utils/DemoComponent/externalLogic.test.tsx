import { cleanup } from '@testing-library/react';

import { vmErrorMock } from './__mocks__/vmErrorMock';
import { vmMock } from './__mocks__/vmMock';
import { vmNoConditionsMock } from './__mocks__/vmNoConditionsMock';
import { externalLogic } from './extrenalLogic';

afterEach(cleanup);

test('externalLogic', () => {
  const conditions = externalLogic(vmMock, true, null);

  expect(conditions && conditions.length).toBe(1);
});

test('externalLogic (error loading vm)', () => {
  const conditions = externalLogic(vmErrorMock, true, null);

  expect(conditions && conditions.length).toBe(null);
});

test('externalLogic (not loaded yet)', () => {
  const conditions = externalLogic(null, false, null);
  expect(conditions).toBe(null);
});

test('externalLogic (no conditions in vm)', () => {
  const conditions = externalLogic(vmNoConditionsMock, true, null);

  expect(conditions && conditions.length).toBe(0);
});

test('externalLogic (data error)', () => {
  const conditions = externalLogic(null, true, 'Error loading data');

  expect(conditions).toBe(null);
});
