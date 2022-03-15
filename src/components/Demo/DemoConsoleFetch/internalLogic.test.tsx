import { cleanup } from '@testing-library/react';

import { fetchErrorMock } from './__mocks__/fetchErrorMock';
import { fetchMock } from './__mocks__/fetchMock';
import { fetchNoConditionsMock } from './__mocks__/fetchNoConditionsMock';
import { internalLogic } from './intrenalLogic';

afterEach(cleanup);

test('internalLogic', () => {
  const conditions = internalLogic(fetchMock, true, null);

  expect(conditions && conditions.length).toBe(1);
});

test('internalLogic (error loading vm)', () => {
  const conditions = internalLogic(fetchErrorMock, true, null);

  expect(conditions && conditions.length).toBe(null);
});

test('internalLogic (not loaded yet)', () => {
  const conditions = internalLogic(null, false, null);
  expect(conditions).toBe(null);
});

test('internalLogic (no conditions in vm)', () => {
  const conditions = internalLogic(fetchNoConditionsMock, true, null);

  expect(conditions && conditions.length).toBe(0);
});

test('internalLogic (data error)', () => {
  const conditions = internalLogic(null, true, 'Error loading data');

  expect(conditions).toBe(null);
});
