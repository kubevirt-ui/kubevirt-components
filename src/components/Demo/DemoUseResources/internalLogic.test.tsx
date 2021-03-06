import { cleanup } from '@testing-library/react';

import { resourcesErrorMock } from './__mocks__/resourcesErrorMock';
import { resourcesMock } from './__mocks__/resourcesMock';
import { resourcesNoConditionsMock } from './__mocks__/resourcesNoConditionsMock';
import { internalLogic } from './intrenalLogic';

afterEach(cleanup);

test('internalLogic', () => {
  const conditions = internalLogic(resourcesMock, true, null);

  expect(conditions && conditions.length).toBe(1);
});

test('internalLogic (error loading vm)', () => {
  const conditions = internalLogic(resourcesErrorMock, true, null);

  expect(conditions && conditions.length).toBe(null);
});

test('internalLogic (not loaded yet)', () => {
  const conditions = internalLogic(null, false, null);
  expect(conditions).toBe(null);
});

test('internalLogic (no conditions in vm)', () => {
  const conditions = internalLogic(resourcesNoConditionsMock, true, null);

  expect(conditions && conditions.length).toBe(0);
});

test('internalLogic (data error)', () => {
  const conditions = internalLogic(null, true, 'Error loading data');

  expect(conditions).toBe(null);
});
