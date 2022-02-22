
Spinning icon
```js
  <StatusIcon status='Running' spin />
```

Showcase in a list of virtual machines

```js
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

<TableComposable>
  <Caption>Virtual Machines list</Caption>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>State</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Debian virtual machine</Td>
      <Td><StatusIcon status='Paused' /> Paused</Td>
    </Tr>
    
    <Tr>
      <Td>RHEL virtual machine</Td>
      <Td><StatusIcon status='Starting' spin /> Starting</Td>
    </Tr>
    <Tr>
      <Td>CentOS virtual machine</Td>
      <Td><StatusIcon status='ErrImagePull' /> Error</Td>
    </Tr>
  </Tbody>
</TableComposable>
```

All possible statuses

```js
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

const possibleStatuses = {
  Stopped: 'Stopped',
  Migrating: 'Migrating',
  Provisioning: 'Provisioning',
  Starting: 'Starting',
  Running: 'Running',
  Paused: 'Paused',
  Stopping: 'Stopping',
  Terminating: 'Terminating',
  CrashLoopBackOff: 'CrashLoopBackOff',
  FailedUnschedulable: 'FailedUnschedulable',
  ErrorUnschedulable: 'ErrorUnschedulable',
  ErrImagePull: 'ErrImagePull',
  ImagePullBackOff: 'ImagePullBackOff',
  ErrorPvcNotFound: 'ErrorPvcNotFound',
  ErrorDataVolumeNotFound: 'ErrorDataVolumeNotFound',
  DataVolumeError: 'DataVolumeError',
  WaitingForVolumeBinding: 'WaitingForVolumeBinding',
  Unknown: 'Unknown',
};

<TableComposable>
  <Thead>
    <Tr>
      <Th>Printable Status</Th>
      <Th>Icon</Th>
    </Tr>
  </Thead>
  <Tbody>
  {Object.values(possibleStatuses).map(status => (
    <Tr key={status}>
      <Td>{status}</Td>
      <Td><StatusIcon status={status} /></Td>
    </Tr>
  ))}
  </Tbody>
</TableComposable>


```
