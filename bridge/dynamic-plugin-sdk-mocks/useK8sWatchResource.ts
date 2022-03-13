import * as React from 'react';
import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
import getWatchK8sResourceURL from './getWatchK8sResourceURL';

export const useK8sWatchResource = <R extends K8sResourceCommon | K8sResourceCommon[]>(
    props: WatchK8sResource | null,
  ) => {
  const [loaded, setLoaded] = React.useState(false);
  const [loadError, setLoadError] = React.useState<string>(null);
  const [data, setData] = React.useState<R>();
  const baseURL = window.location.hostname.includes('kubevirt-ui.github.io') ?
    '/kubevirt-components/api/kubernetes/' :
    '/api/kubernetes/';

  React.useEffect(() => {
    const url = baseURL + getWatchK8sResourceURL(props);

    fetch(url)
      .then(response => response.json())
      .then((jsonData) => {
        if (props.isList) {
          setData(jsonData?.items as R);
        } else {
          setData(jsonData as R);
        }
      })
      .catch((error) => {
        setLoadError(error);        
      })
      .finally(() => {
        setLoaded(true);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.name, props?.namespace]);

  return [data, loaded, loadError];
};

export default useK8sWatchResource;
