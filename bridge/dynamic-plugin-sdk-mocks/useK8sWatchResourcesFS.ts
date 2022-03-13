import { ResourcesObject, WatchK8sResources, WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
import fs from 'fs';
import getWatchK8sResourceURL from './getWatchK8sResourceURL';


export const useK8sWatchResourcesFS = <R extends ResourcesObject>(
  props: WatchK8sResources<R>,
): WatchK8sResults<R> => {
  const baseURL = 'public/api/kubernetes/';
  const fetchKeys = Object.keys(props);
  let data: WatchK8sResults<R> = null;

  fetchKeys.map((key) => {
    const reqPath = baseURL + getWatchK8sResourceURL(props[key]);
    const reqPathExist = fs.existsSync(reqPath);

    if (!reqPathExist) {
      data = {...data, [key]: {data: {}, loaded: true, loadError: 'Resource not found (404)'}};
    };

    if (reqPathExist) {
      const response = fs.readFileSync (reqPath).toString('utf-8');
      const jsonData = JSON.parse(response);
      if (props.isList) {
        data = {...data, [key]: {data: jsonData?.items as R, loaded: true, loadError: null}};
      } else {
        data = {...data, [key]: {data: jsonData as R, loaded: true, loadError: null}};
      }
    };
  });

  return data;
};

export default useK8sWatchResourcesFS;
