import * as React from 'react';

import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Text, TextVariants } from '@patternfly/react-core';

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
  /**
   * Text to render on missing data
   */
  errorText?: string;
  /**
   * data-test-id for this component
   */
  dataTestID?: string;
}

/**
 * Default prop values for DemoComponent.
 */
export const DemoComponentDefaults: Partial<DemoComponentProps> = {
  errorText: 'Missing virtual machine data',
  dataTestID: 'DemoComponent',
};

/**
 * DemoComponent renders a demo component.
 *
 * This component can me usefull to demo the components repo coding style.
 * @param {DemoComponentProps} props name and namespace.
 * */
export const DemoComponent: React.FC<DemoComponentProps> = ({
  name,
  namespace,
  errorText,
  dataTestID,
}: DemoComponentProps) => {
  const [vm, loaded, loadError] = useK8sWatchResource<V1VirtualMachine>({
    groupVersionKind: VirtualMachineModelGroupVersionKind,
    name,
    namespace,
    namespaced: true,
  });
  const conditions = externalLogic(vm, loaded, loadError);

  return conditions ? (
    <ConditionLabelList data-test-id={dataTestID} conditions={conditions} />
  ) : (
    <Text data-test-id={dataTestID} component={TextVariants.small}>
      {errorText}
    </Text>
  );
};
DemoComponent.displayName = 'DemoComponent';

export default DemoComponent;
