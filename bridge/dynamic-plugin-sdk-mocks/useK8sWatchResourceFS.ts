import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
import fs from 'fs';

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

export const useK8sWatchResourceFS = <R extends K8sResourceCommon | K8sResourceCommon[]>(
    props: WatchK8sResource | null,
  ) => {
    let data = {};

    const reqPath = 'public' + getResourceURL(props);
    if (!fs.existsSync(reqPath)) {
      return [{}, true, 'Resource not found (404)'];
    }

    const response = fs.readFileSync (reqPath).toString('utf-8');
    const jsonData = JSON.parse(response);
    if (props.isList) {
      data = jsonData?.items as R;
    } else {
      data = jsonData as R;
    }

    return [data, true, null];
};

export default useK8sWatchResourceFS;
