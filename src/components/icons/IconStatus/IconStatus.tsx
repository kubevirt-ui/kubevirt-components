import * as React from 'react';

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

export enum statuses {
  Stopped = 'Stopped',
  Migrating = 'Migrating',
  Provisioning = 'Provisioning',
  Starting = 'Starting',
  Running = 'Running',
  Paused = 'Paused',
  Stopping = 'Stopping',
  Terminating = 'Terminating',
  Unknown = 'Unknown',
  CrashLoopBackOff = 'CrashLoopBackOff',
  FailedUnschedulable = 'FailedUnschedulable',
  ErrorUnschedulable = 'ErrorUnschedulable',
  ErrImagePull = 'ErrImagePull',
  ImagePullBackOff = 'ImagePullBackOff',
  ErrorPvcNotFound = 'ErrorPvcNotFound',
  ErrorDataVolumeNotFound = 'ErrorDataVolumeNotFound',
  DataVolumeError = 'DataVolumeError',
  WaitingForVolumeBinding = 'WaitingForVolumeBinding',
}

const statusToIconHandler = {
  get: (
    mapper: Record<
      statuses,
      React.ComponentClass | React.FC | ((props: IconProps) => React.ReactElement)
    >,
    status: statuses,
  ) => {
    if (!status) return UnknownIcon;

    const statusIcon = mapper[status];
    if (statusIcon) return statusIcon;

    return SpinningInProgressIcon;
  },
};

export const statusToIcon = new Proxy(
  {
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
  },
  statusToIconHandler,
);

const statusLabelHandler = {
  get: (mapper: Record<string, string>, status: string) => {
    if (!status) return mapper[statuses.Unknown];

    const statusLabel = mapper[status];
    if (statusLabel) return statusLabel;

    return status;
  },
};

export enum customStatusLabels {
  Starting = 'Starting',
  Error = 'Error',
  Other = 'Other',
  Deleting = 'Deleting',
}

export const statusToLabel = new Proxy(
  {
    [statuses.Terminating]: customStatusLabels.Deleting,
    [statuses.Provisioning]: customStatusLabels.Starting,
    [statuses.WaitingForVolumeBinding]: customStatusLabels.Starting,
    [statuses.ErrImagePull]: customStatusLabels.Error,
    [statuses.CrashLoopBackOff]: customStatusLabels.Error,
    [statuses.FailedUnschedulable]: customStatusLabels.Error,
    [statuses.ErrorUnschedulable]: customStatusLabels.Error,
    [statuses.ImagePullBackOff]: customStatusLabels.Error,
    [statuses.ErrorPvcNotFound]: customStatusLabels.Error,
    [statuses.ErrorDataVolumeNotFound]: customStatusLabels.Error,
    [statuses.DataVolumeError]: customStatusLabels.Error,
    [statuses.Unknown]: customStatusLabels.Other,
  },
  statusLabelHandler,
);

export type IconStatusProps = {
  /** String representing the status property.
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
  status: string;
};

export function IconStatus({ status }: IconStatusProps) {
  const Icon = statusToIcon[status as statuses];
  const title = statusToLabel[status];

  return <Icon title={title} />;
}
