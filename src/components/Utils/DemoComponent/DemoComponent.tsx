import * as React from 'react';

import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useK8sWatchResource, WatchK8sResult } from '@openshift-console/dynamic-plugin-sdk';

import { ConditionLabelList } from '../ConditionLabelList';

export const externalLogicData = (props: WatchK8sResult<V1VirtualMachine>) => {
  const [vm, loaded, loadError] = props;
  if (!loaded || !!loadError) {
    return null;
  }

  return vm?.status?.conditions;
};

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
 * @param {string} props.name vm name
 * @param {string} props.namespace vm namespace
 * */
export const DemoComponent: React.FC<DemoComponentProps> = (props: DemoComponentProps) => {
  const { name, namespace } = props;
  const [vm, loaded, loadError] = useK8sWatchResource<V1VirtualMachine>({
    groupVersionKind: VirtualMachineModelGroupVersionKind,
    name,
    namespace,
    namespaced: true,
  });
  const conditions = externalLogicData([vm, loaded, loadError]);

  return conditions ? <ConditionLabelList conditions={conditions} /> : null;
};
DemoComponent.displayName = 'DemoComponent';

export default DemoComponent;
