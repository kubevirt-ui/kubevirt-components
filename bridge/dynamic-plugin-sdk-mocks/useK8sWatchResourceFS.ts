import { K8sResourceCommon, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
import fs from 'fs';
import getWatchK8sResourceURL from './getWatchK8sResourceURL';


export const useK8sWatchResourceFS = <R extends K8sResourceCommon | K8sResourceCommon[]>(
    props: WatchK8sResource | null,
  ) => {
    const baseURL = 'public/api/kubernetes/';

    let data = {};

    const reqPath = baseURL + getWatchK8sResourceURL(props);
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
