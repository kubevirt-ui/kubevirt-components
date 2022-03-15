import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';

export const resourcesNoConditionsMock: V1VirtualMachine = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachine',
  metadata: {
    name: 'vm-example',
    namespace: 'default',
  },
  spec: {
    running: false,
    template: {
      spec: {
        domain: {
          devices: {
            disks: [
              {
                bootOrder: 1,
                disk: {
                  bus: 'virtio',
                },
                name: 'containerdisk',
              },
            ],
          },
          resources: {
            requests: {
              memory: '1G',
            },
          },
        },
        volumes: [
          {
            containerDisk: {
              image: 'quay.io/kubevirt/fedora-cloud-container-disk-demo:latest',
            },
            name: 'containerdisk',
          },
        ],
      },
    },
  },
  status: {
    printableStatus: 'Stopped',
    volumeSnapshotStatuses: [
      {
        enabled: false,
        name: 'containerdisk',
        reason: 'Snapshot is not supported for this volumeSource type [containerdisk]',
      },
    ],
  },
};
