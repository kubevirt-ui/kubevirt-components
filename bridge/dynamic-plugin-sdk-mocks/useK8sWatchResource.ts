import * as React from 'react';
import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';

const getURL = (props: WatchK8sResource): string => {
  const {name, namespace, namespaced, isList, groupVersionKind} = props;
  const {group, version, kind} = groupVersionKind;
  if (!group || !kind || !version) {
    return;
  }

  const baseURL ='/api/kubernetes/apis/' + group + '/' + version;
  const namespaceURL =
    namespaced ? '/namespaces/' + (namespace.toString() || 'default') : '';
  const resourceKind = kind.toLowerCase();
  const pluralize = isList ? 's' : '';
  const resourceName = name ? name.toString() : '';
  const url = baseURL + namespaceURL + '/' + resourceKind + pluralize + '/' + resourceName;

  return url;
};

export const useK8sWatchResource = <R extends K8sResourceCommon | K8sResourceCommon[]>(
    props: WatchK8sResource | null,
  ) => {
    const [loaded, setLoaded] = React.useState(false);
    const [loadError, setLoadError] = React.useState<string>(null);
    const [data, setData] = React.useState<R>();
  
    React.useEffect(() => {
      const url = getURL(props);
  
      fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
          setData(jsonData as R);
          setLoaded(true);
        })
        .catch((error) => {
          setLoadError(error);
          setLoaded(true);
        });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props?.name, props?.namespace]);
  
    return [data, loaded, loadError];
  };

  export default useK8sWatchResource;