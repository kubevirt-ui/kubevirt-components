import * as React from 'react';

import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';

import { ConditionLabelList } from '../ConditionLabelList';

import { externalLogic } from './extrenalLogic';

export interface DemoComponentProps {
  /**
   * VirtualMachine name.
   */
  name: string;
  /**
   * VirtualMachine namespace.
   */
  namespace: string;
}

/**
 * DemoComponent renders a demo component.
 *
 * This component can me usefull to demo the components repo coding style.
 * @param {DemoComponentProps} props name and namespace.
 * */
export const DemoComponent: React.FC<DemoComponentProps> = ({ name, namespace }) => {
  const [vm, loaded, loadError] = useK8sWatchResource<V1VirtualMachine>({
    groupVersionKind: { group: 'kubevirt.io', version: 'v1', kind: 'VirtualMachine' },
    name,
    namespace,
    namespaced: true,
  });
  const conditions = externalLogic(vm, loaded, loadError);

  return conditions ? <ConditionLabelList conditions={conditions} /> : null;
};
DemoComponent.displayName = 'DemoComponent';

export default DemoComponent;
