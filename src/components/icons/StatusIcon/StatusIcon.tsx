import * as React from 'react';

import { V1VirtualMachineStatus } from '@kubevirt-ui/kubevirt-api/kubevirt';
import {
  ExclamationCircleIcon,
  InProgressIcon,
  OffIcon,
  PausedIcon,
  SyncAltIcon,
  UnknownIcon,
} from '@patternfly/react-icons';
import { global_danger_color_100 as dangerColor } from '@patternfly/react-tokens/dist/js/global_danger_color_100';

interface IconProps {
  title: string;
}

function RedExclamationCircleIcon({ title }: IconProps): React.ReactElement {
  return <ExclamationCircleIcon color={dangerColor.value} title={title} />;
}

function SpinningInProgressIcon({ title }: IconProps): React.ReactElement {
  return <InProgressIcon title={title} className="fa-spin" />;
}

function SpinningSyncAltIcon({ title }: IconProps): React.ReactElement {
  return <SyncAltIcon title={title} className="fa-spin" />;
}

export enum statusLabel {
  Stopped = 'Stopped',
  Migrating = 'Migrating',
  Provisioning = 'Provisioning',
  Starting = 'Starting',
  Running = 'Running',
  Paused = 'Paused',
  Stopping = 'Stopping',
  Terminating = 'Terminating',
  Unknown = 'Unknown',
  Error = 'Error',
  Completed = 'Completed',
  Pending = 'Pending',
  Importing = 'Importing',
  InProgress = 'InProgress',
  Other = 'Other',
  Deleting = 'Deleting',
}

export const statuses = {
  Stopped: 'Stopped',
  Migrating: 'Migrating',
  Provisioning: 'Provisioning',
  Starting: 'Starting',
  Running: 'Running',
  Paused: 'Paused',
  Stopping: 'Stopping',
  Terminating: 'Terminating',
  Unknown: 'Unknown',
  CrashLoopBackOff: 'CrashLoopBackOff',
  FailedUnschedulable: 'FailedUnschedulable',
  ErrorUnschedulable: 'ErrorUnschedulable',
  ErrImagePull: 'ErrImagePull',
  ImagePullBackOff: 'ImagePullBackOff',
  ErrorPvcNotFound: 'ErrorPvcNotFound',
  ErrorDataVolumeNotFound: 'ErrorDataVolumeNotFound',
  DataVolumeError: 'DataVolumeError',
  WaitingForVolumeBinding: 'WaitingForVolumeBinding',
};

const printableToIcon = {
  [statuses.Stopped]: OffIcon,
  [statuses.Migrating]: SpinningInProgressIcon,
  [statuses.Provisioning]: SpinningInProgressIcon,
  [statuses.Starting]: SpinningInProgressIcon,
  [statuses.Running]: SpinningSyncAltIcon,
  [statuses.Paused]: PausedIcon,
  [statuses.Stopping]: SpinningInProgressIcon,
  [statuses.Terminating]: SpinningInProgressIcon,
  [statuses.WaitingForVolumeBinding]: SpinningInProgressIcon,
  [statuses.ErrImagePull]: RedExclamationCircleIcon,
  [statuses.CrashLoopBackOff]: RedExclamationCircleIcon,
  [statuses.FailedUnschedulable]: RedExclamationCircleIcon,
  [statuses.ErrorUnschedulable]: RedExclamationCircleIcon,
  [statuses.ImagePullBackOff]: RedExclamationCircleIcon,
  [statuses.ErrorPvcNotFound]: RedExclamationCircleIcon,
  [statuses.ErrorDataVolumeNotFound]: RedExclamationCircleIcon,
  [statuses.DataVolumeError]: RedExclamationCircleIcon,
  [statuses.Unknown]: UnknownIcon,
};

export const statusToLabel = {
  [statuses.Stopped]: statusLabel.Stopped,
  [statuses.Migrating]: statusLabel.Migrating,
  [statuses.Provisioning]: statusLabel.Starting,
  [statuses.Starting]: statusLabel.Starting,
  [statuses.Running]: statusLabel.Running,
  [statuses.Paused]: statusLabel.Paused,
  [statuses.Stopping]: statusLabel.Stopping,
  [statuses.Terminating]: statusLabel.Terminating,
  [statuses.WaitingForVolumeBinding]: statusLabel.Starting,
  [statuses.ErrImagePull]: statusLabel.Error,
  [statuses.CrashLoopBackOff]: statusLabel.Error,
  [statuses.FailedUnschedulable]: statusLabel.Error,
  [statuses.ErrorUnschedulable]: statusLabel.Error,
  [statuses.ImagePullBackOff]: statusLabel.Error,
  [statuses.ErrorPvcNotFound]: statusLabel.Error,
  [statuses.ErrorDataVolumeNotFound]: statusLabel.Error,
  [statuses.DataVolumeError]: statusLabel.Error,
  [statuses.Unknown]: statusLabel.Other,
};

export interface StatusIconProps {
  /** String representing the
   * [V1VirtualMachineStatus](https://github.com/kubevirt-ui/kubevirt-api/blob/e7083a1ad59ae1fa0df83e940687186049ec3c63/kubevirt/models/V1VirtualMachineStatus.ts#L57)
   * printableStatus property.
   * Supported statuses now:
   * - Stopped
   * - Migrating
   * - Provisioning
   * - Starting
   * - Running
   * - Paused
   * - Stopping
   * - Terminating
   * - Unknown
   * - CrashLoopBackOff
   * - FailedUnschedulable
   * - ErrorUnschedulable
   * - ErrImagePull
   * - ImagePullBackOff
   * - ErrorPvcNotFound
   * - ErrorDataVolumeNotFound
   * - DataVolumeError
   * - WaitingForVolumeBinding
   * */
  vmPrintableStatus: V1VirtualMachineStatus['printableStatus'];
}

export function StatusIcon({ vmPrintableStatus }: StatusIconProps) {
  const Icon = printableToIcon[vmPrintableStatus || statuses.Unknown];
  const title = statusToLabel[vmPrintableStatus || statuses.Unknown];

  return <Icon title={title} />;
}
