import { WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
import { configure } from '@testing-library/dom';

import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

import { useK8sWatchResourceFS } from './bridge/dynamic-plugin-sdk-mocks/useK8sWatchResourceFS';

configure({
  testIdAttribute: 'data-test-id',
});

jest.doMock('@openshift-console/dynamic-plugin-sdk/lib/lib-core', () => ({
  useK8sWatchResource: jest.fn((props: WatchK8sResource | null) => {
    const response = useK8sWatchResourceFS(props);

    return response;
  }),
}));
