import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';

/**
 * Do some external logic for DemoComponet.
 *
 * @param {V1VirtualMachine | null} vm a virtual machine object.
 * @param {boolean} loaded indecates the vm data is loaded.
 * @param {string | null} loadError an error loading data.
 * @returns {V1VirtualMachineCondition[] | null} a list of conditions or null if no vm data available.
 */
export const externalLogic = (
  vm: V1VirtualMachine | null,
  loaded: boolean,
  loadError: string | null,
) => {
  if (!loaded || loadError) {
    return null;
  }

  return vm?.status?.conditions || [];
};
