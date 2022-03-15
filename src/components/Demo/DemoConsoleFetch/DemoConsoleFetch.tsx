import * as React from 'react';

import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { consoleFetch } from '@openshift-console/dynamic-plugin-sdk';
import { Text, TextVariants } from '@patternfly/react-core';

import { ConditionLabelList } from '../../Utils/ConditionLabelList';

import { internalLogic } from './intrenalLogic';

export interface DemoConsoleFetchProps {
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
  dataTestID: string;
}

/**
 * DemoConsoleFetch renders a demo component.
 *
 * This component can me usefull to demo the components repo coding style.
 * @param {DemoConsoleFetchProps} props is the components props object.
 * @param {string} props.name name of the virtual machine.
 * @param {string} props.namespace namespace of the virtual machine.
 * @param {string} props.errorText test to print on error getting virtual machine data.
 * @param {string} props.dataTestID an ID for testing.
 * */
export const DemoConsoleFetch: React.FC<DemoConsoleFetchProps> = ({
  name,
  namespace,
  errorText,
  dataTestID,
}: DemoConsoleFetchProps) => {
  const [data, setData] = React.useState<{
    obj: V1VirtualMachine | null;
    loaded: boolean;
    loadError: string | null;
  }>({ obj: null, loaded: false, loadError: null });

  React.useEffect(() => {
    consoleFetch(
      `/api/kubernetes/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}`,
    )
      .then((response) => {
        response.text().then((text) => {
          const obj = JSON.parse(text);

          if (obj?.kind === 'VirtualMachine') {
            setData({ obj: JSON.parse(text) as V1VirtualMachine, loaded: true, loadError: null });
          } else {
            setData({ obj: null, loaded: true, loadError: 'Bad response' });
          }
        });
      })
      .catch((err) => setData({ obj: null, loaded: true, loadError: err }));
  }, [name, namespace]);

  const { obj, loaded, loadError } = data;
  const conditions = internalLogic(obj, loaded, loadError);

  if (conditions) {
    return (
      <span data-test-id={dataTestID}>
        <ConditionLabelList conditions={conditions} />
      </span>
    );
  }

  if (loadError === 'Bad response') {
    return (
      <Text data-test-id={`${dataTestID}-bad-response`} component={TextVariants.small}>
        {errorText}
      </Text>
    );
  }

  return (
    <Text data-test-id={`${dataTestID}-error`} component={TextVariants.small}>
      {errorText}
    </Text>
  );
};

DemoConsoleFetch.displayName = 'DemoConsoleFetch';

export default DemoConsoleFetch;
