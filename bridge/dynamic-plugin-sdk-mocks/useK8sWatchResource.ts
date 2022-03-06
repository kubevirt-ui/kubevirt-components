import * as React from 'react';
import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';

const getResourceURL = (props: WatchK8sResource): string => {
  const {name, namespace, namespaced, groupVersionKind} = props;
  const {group, version, kind} = groupVersionKind;
  if (!group || !kind || !version) {
    return;
  }

  const baseURL ='/api/kubernetes/apis/' + group + '/' + version;
  const namespaceURL =
    namespaced ? '/namespaces/' + (namespace.toString() || 'default') : '';
  const resourceKind = kind.toLowerCase() + 's';
  const resourceName = name ? name.toString() : '';
  const url = baseURL + namespaceURL + '/' + resourceKind + (resourceName ? '/' + resourceName : '');

  return url;
};

export const useK8sWatchResource = <R extends K8sResourceCommon | K8sResourceCommon[]>(
    props: WatchK8sResource | null,
  ) => {
  const [loaded, setLoaded] = React.useState(false);
  const [loadError, setLoadError] = React.useState<string>(null);
  const [data, setData] = React.useState<R>();

  React.useEffect(() => {
    const url = getResourceURL(props);

    fetch(url)
      .then(response => response.json())
      .then((jsonData) => {
        if (props.isList) {
          setData(jsonData?.items as R);
        } else {
          setData(jsonData as R);
        }
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
