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

export enum VMStatusLabel {
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

export const printableVmStatus = {
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
  [printableVmStatus.Stopped]: OffIcon,
  [printableVmStatus.Migrating]: SpinningInProgressIcon,
  [printableVmStatus.Provisioning]: SpinningInProgressIcon,
  [printableVmStatus.Starting]: SpinningInProgressIcon,
  [printableVmStatus.Running]: SpinningSyncAltIcon,
  [printableVmStatus.Paused]: PausedIcon,
  [printableVmStatus.Stopping]: SpinningInProgressIcon,
  [printableVmStatus.Terminating]: SpinningInProgressIcon,
  [printableVmStatus.WaitingForVolumeBinding]: SpinningInProgressIcon,
  [printableVmStatus.ErrImagePull]: RedExclamationCircleIcon,
  [printableVmStatus.CrashLoopBackOff]: RedExclamationCircleIcon,
  [printableVmStatus.FailedUnschedulable]: RedExclamationCircleIcon,
  [printableVmStatus.ErrorUnschedulable]: RedExclamationCircleIcon,
  [printableVmStatus.ImagePullBackOff]: RedExclamationCircleIcon,
  [printableVmStatus.ErrorPvcNotFound]: RedExclamationCircleIcon,
  [printableVmStatus.ErrorDataVolumeNotFound]: RedExclamationCircleIcon,
  [printableVmStatus.DataVolumeError]: RedExclamationCircleIcon,
  [printableVmStatus.Unknown]: UnknownIcon,
};

export const printableStatusToLabel = {
  [printableVmStatus.Stopped]: VMStatusLabel.Stopped,
  [printableVmStatus.Migrating]: VMStatusLabel.Migrating,
  [printableVmStatus.Provisioning]: VMStatusLabel.Starting,
  [printableVmStatus.Starting]: VMStatusLabel.Starting,
  [printableVmStatus.Running]: VMStatusLabel.Running,
  [printableVmStatus.Paused]: VMStatusLabel.Paused,
  [printableVmStatus.Stopping]: VMStatusLabel.Stopping,
  [printableVmStatus.Terminating]: VMStatusLabel.Terminating,
  [printableVmStatus.WaitingForVolumeBinding]: VMStatusLabel.Starting,
  [printableVmStatus.ErrImagePull]: VMStatusLabel.Error,
  [printableVmStatus.CrashLoopBackOff]: VMStatusLabel.Error,
  [printableVmStatus.FailedUnschedulable]: VMStatusLabel.Error,
  [printableVmStatus.ErrorUnschedulable]: VMStatusLabel.Error,
  [printableVmStatus.ImagePullBackOff]: VMStatusLabel.Error,
  [printableVmStatus.ErrorPvcNotFound]: VMStatusLabel.Error,
  [printableVmStatus.ErrorDataVolumeNotFound]: VMStatusLabel.Error,
  [printableVmStatus.DataVolumeError]: VMStatusLabel.Error,
  [printableVmStatus.Unknown]: VMStatusLabel.Other,
};

export interface VMIconStatusProps {
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

export function VMIconStatus({ vmPrintableStatus }: VMIconStatusProps) {
  const Icon = printableToIcon[vmPrintableStatus || printableVmStatus.Unknown];
  const title = printableStatusToLabel[vmPrintableStatus || printableVmStatus.Unknown];

  return <Icon title={title} />;
}
