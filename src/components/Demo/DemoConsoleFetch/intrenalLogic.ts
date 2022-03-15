import { IoK8sApimachineryPkgApisMetaV1Status } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * Do some internal logic for DemoComponet.
 *
 * @param {V1VirtualMachine | IoK8sApimachineryPkgApisMetaV1Status | null} obj returned from the API call.
 * @param {boolean} loaded indecates the vm data is loaded.
 * @param {string | null} loadError an error loading data.
 * @returns {V1VirtualMachineCondition[] | null} a list of conditions or null if no vm data available.
 */
export const internalLogic = (
  obj: V1VirtualMachine | IoK8sApimachineryPkgApisMetaV1Status | null,
  loaded: boolean,
  loadError: string | null,
) => {
  // Check for loaded data
  if (!obj || !loaded || loadError) {
    return null;
  }

  // Check for VM data
  if (obj?.kind === 'Status') {
    return null;
  }

  return (obj as V1VirtualMachine).status?.conditions || [];
};
