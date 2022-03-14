import * as React from 'react';

import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { Text, TextVariants } from '@patternfly/react-core';

import { ConditionLabelList } from '../../Utils/ConditionLabelList';

import { internalLogic } from './intrenalLogic';

export interface DemoUseResourcesProps {
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
 * DemoUseResource renders a demo component.
 *
 * This component can me usefull to demo the components repo coding style.
 * @param {DemoUseResourcesProps} props is the components props object.
 * @param {string} props.name name of the virtual machine.
 * @param {string} props.namespace namespace of the virtual machine.
 * @param {string} props.errorText test to print on error getting virtual machine data.
 * @param {string} props.dataTestID an ID for testing.
 * */
export const DemoUseResources: React.FC<DemoUseResourcesProps> = ({
  name,
  namespace,
  errorText,
  dataTestID,
}: DemoUseResourcesProps) => {
  const resources = useK8sWatchResources<{ vm: V1VirtualMachine }>({
    vm: {
      groupVersionKind: {
        version: 'v1',
        kind: 'VirtualMachine',
        group: 'kubevirt.io',
      },
      name,
      namespace,
      namespaced: true,
    },
  });
  const { data: vm, loaded, loadError } = resources?.vm || {};
  const conditions = internalLogic(vm, loaded, loadError);

  return conditions ? (
    <ConditionLabelList data-test-id={dataTestID} conditions={conditions} />
  ) : (
    <Text data-test-id={dataTestID} component={TextVariants.small}>
      {errorText}
    </Text>
  );
};
DemoUseResources.displayName = 'DemoUseResources';

export default DemoUseResources;
