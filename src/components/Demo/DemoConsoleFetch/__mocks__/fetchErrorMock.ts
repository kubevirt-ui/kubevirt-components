export const fetchErrorMock = {
  kind: 'Status',
  apiVersion: 'v1',
  metadata: {},
  status: 'Failure',
  message: 'virtualmachines.kubevirt.io "does-not-exist" not found',
  reason: 'NotFound',
  details: {
    name: 'does-not-exist',
    group: 'kubevirt.io',
    kind: 'virtualmachines',
  },
  code: 404,
};
