import { ConsoleFetch } from '@openshift-console/dynamic-plugin-sdk';

export const consoleFetch: ConsoleFetch = async (url: string, options = {}, timeout = 60000) => {
  const resourceURL = window.location.hostname.includes('kubevirt-ui.github.io') ?
    `/kubevirt-components${url}` :
    url;
  const fetchPromise = fetch(resourceURL, options);

  if (timeout <= 0) {
    return fetchPromise;
  }

  const timeoutPromise = new Promise<Response>((_resolve, reject) => {
    setTimeout(() => reject(`Fetch timed out (${timeout})`), timeout);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
};

export default consoleFetch;
