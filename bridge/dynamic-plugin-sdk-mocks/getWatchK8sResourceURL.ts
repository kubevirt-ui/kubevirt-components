import { WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';

const getWatchK8sResourceURL = (props: WatchK8sResource): string => {
  const {name, namespace, namespaced, groupVersionKind} = props;
  const {group, version, kind} = groupVersionKind;
  if (!kind || !version) {
    return;
  }

  const namespaceURL =
    namespaced ? '/namespaces/' + (namespace.toString() || 'default') : '';
  const resourcePlural = kind.toLowerCase() + 's';
  const resourceName = name ? name.toString() : '';
  const url = group ?
    'apis/' + group + '/' + version + namespaceURL + '/' + resourcePlural + (resourceName ? '/' + resourceName : ''):
    'api/' + version + namespaceURL + '/' + resourcePlural + (resourceName ? '/' + resourceName : '');

  return url;
};

export default getWatchK8sResourceURL;
