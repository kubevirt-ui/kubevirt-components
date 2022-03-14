import * as React from 'react';

import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Text, TextVariants } from '@patternfly/react-core';

import { ConditionLabelList } from '../../Utils/ConditionLabelList';

import { externalLogic } from './extrenalLogic';

export interface DemoUseResourceProps {
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
 * DemoComponent renders a demo component.
 *
 * This component can me usefull to demo the components repo coding style.
 * @param {DemoUseResourceProps} props is the components props object.
 * @param {string} props.name name of the virtual machine.
 * @param {string} props.namespace namespace of the virtual machine.
 * @param {string} props.errorText test to print on error getting virtual machine data.
 * @param {string} props.dataTestID an ID for testing.
 * */
export const DemoUseResource: React.FC<DemoUseResourceProps> = ({
  name,
  namespace,
  errorText,
  dataTestID,
}: DemoUseResourceProps) => {
  const [vm, loaded, loadError] = useK8sWatchResource<V1VirtualMachine>({
    groupVersionKind: {
      version: 'v1',
      kind: 'VirtualMachine',
      group: 'kubevirt.io',
    },
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
DemoUseResource.displayName = 'DemoComponent';

export default DemoUseResource;
