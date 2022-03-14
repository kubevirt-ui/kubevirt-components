import { cleanup } from '@testing-library/react';

import { vmErrorMock } from './__mocks__/vmErrorMock';
import { vmMock } from './__mocks__/vmMock';
import { vmNoConditionsMock } from './__mocks__/vmNoConditionsMock';
import { internalLogic } from './intrenalLogic';

afterEach(cleanup);

test('internalLogic', () => {
  const conditions = internalLogic(vmMock, true, null);

  expect(conditions && conditions.length).toBe(1);
});

test('internalLogic (error loading vm)', () => {
  const conditions = internalLogic(vmErrorMock, true, null);

  expect(conditions && conditions.length).toBe(null);
});

test('internalLogic (not loaded yet)', () => {
  const conditions = internalLogic(null, false, null);
  expect(conditions).toBe(null);
});

test('internalLogic (no conditions in vm)', () => {
  const conditions = internalLogic(vmNoConditionsMock, true, null);

  expect(conditions && conditions.length).toBe(0);
});

test('internalLogic (data error)', () => {
  const conditions = internalLogic(null, true, 'Error loading data');

  expect(conditions).toBe(null);
});
