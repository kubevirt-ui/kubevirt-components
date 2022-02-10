import { configure } from '@testing-library/dom';

import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

configure({
  testIdAttribute: 'data-test-id',
});
