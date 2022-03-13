import * as React from 'react';
import { ResourcesObject, WatchK8sResources, WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
import getWatchK8sResourceURL from './getWatchK8sResourceURL';

export const useK8sWatchResources = <R extends ResourcesObject>(
    props: WatchK8sResources<R>,
  ): WatchK8sResults<R> => {
  const [dataState, setData] = React.useState<WatchK8sResults<R>>();

  // github pages have project name prefix for the base page url.
  const baseURL = window.location.hostname.includes('kubevirt-ui.github.io') ?
    '/kubevirt-components/api/kubernetes/' :
    '/api/kubernetes/';

  React.useEffect(() => {
    let data: WatchK8sResults<R> = null;
    const fetchKeys = Object.keys(props);

    fetchKeys.map((key) => {
      const url = baseURL + getWatchK8sResourceURL(props[key]);
      fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
          if (props.isList) {
            data = {...data, [key]: {data: jsonData?.items as R, loaded: true, loadError: null}};
          } else {
            data = {...data, [key]: {data: jsonData as R, loaded: true, loadError: null}};
          }
        })
        .catch((error) => {
          data = {...data, [key]: {data: {}, loaded: true, loadError: error.toString()}};
        })
        .finally(() => {
          // Check if all keys loaded
          if (Object.keys(data).length === fetchKeys.length) {
            setData(data);
          };
        });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return dataState;
};

export default useK8sWatchResources;
