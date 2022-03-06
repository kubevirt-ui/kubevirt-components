import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';

export const externalLogic = (vm: V1VirtualMachine, loaded: boolean, loadError: string | null) => {
  return loaded && !loadError && vm?.status?.conditions ? vm?.status?.conditions : null;
};
