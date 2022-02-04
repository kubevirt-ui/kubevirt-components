Examples

```js
const printableVmStatus = {
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

<table>
  <tr>
    <th width='250px'>Printable Status</th>
    <th>Icon</th>
  </tr>
  {Object.values(printableVmStatus).map(status => (
    <tr>
      <td>{status}</td>
      <td><VMIconStatus vmPrintableStatus={status} /></td>
    </tr>
  ))}
</table>


```
