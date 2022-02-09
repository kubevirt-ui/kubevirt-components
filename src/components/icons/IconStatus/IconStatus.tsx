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

import { faSpin } from './utils';

type IconProps = {
  title: string;
};

const RedExclamationCircleIcon: React.FC<IconProps> = ({ title }): React.ReactElement => (
  <ExclamationCircleIcon color={dangerColor.value} title={title} />
);

const SpinningInProgressIcon: React.FC<IconProps> = ({ title }): React.ReactElement => (
  <InProgressIcon title={title} className={faSpin} />
);

const SpinningSyncAltIcon: React.FC<IconProps> = ({ title }): React.ReactElement => (
  <SyncAltIcon title={title} className={faSpin} />
);

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
  get: (mapper: Record<statuses, React.ComponentClass | React.FC<IconProps>>, status: statuses) => {
    const statusIcon = mapper[status];
    if (statusIcon) return statusIcon;

    return UnknownIcon;
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

export enum customStatusLabels {
  Starting = 'Starting',
  Error = 'Error',
  Other = 'Other',
  Deleting = 'Deleting',
}

const statusLabelHandler = {
  get: (mapper: Record<string, string>, status: string) => {
    const statusLabel = mapper[status];
    if (statusLabel) return statusLabel;

    return customStatusLabels.Other;
  },
};

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

export const IconStatus: React.FC<IconStatusProps> = React.memo(({ status }) => {
  const Icon = statusToIcon[status as statuses];
  const title = statusToLabel[status];

  return <Icon title={title} />;
});

IconStatus.displayName = 'IconStatus';
