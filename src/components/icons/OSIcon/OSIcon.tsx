import * as React from 'react';

import bsd from './svg/bsd.svg';
import centos from './svg/centos.svg';
import debian from './svg/debian.svg';
import fedora from './svg/fedora.svg';
import linux from './svg/linux.svg';
import opensuse from './svg/opensuse.svg';
import rhel from './svg/rhel.svg';
import ubuntu from './svg/ubuntu.svg';
import windows from './svg/windows.svg';

export enum OSIconsEnum {
  LINUX = 'icon-linux',
  CENTOS = 'icon-centos',
  FEDORA = 'icon-fedora',
  DEBIAN = 'icon-debian',
  BSD = 'icon-bsd',
  WINDOWS = 'icon-windows',
  RHEL = 'icon-rhel',
  OPENSUSE = 'icon-opensuse',
  UBUNTU = 'icon-ubuntu',
  OTHER = 'icon-other',
}

const iconMap: Record<OSIconsEnum, string> = {
  [OSIconsEnum.LINUX]: linux,
  [OSIconsEnum.CENTOS]: centos,
  [OSIconsEnum.FEDORA]: fedora,
  [OSIconsEnum.DEBIAN]: debian,
  [OSIconsEnum.BSD]: bsd,
  [OSIconsEnum.WINDOWS]: windows,
  [OSIconsEnum.RHEL]: rhel,
  [OSIconsEnum.OPENSUSE]: opensuse,
  [OSIconsEnum.UBUNTU]: ubuntu,
  [OSIconsEnum.OTHER]: linux,
};

export type OSIconProps = {
  /** 	The iconClass in metadata annotations of k8sResources.
   *  OSIconsEnum are the following:
   *  - icon-linux
   *  - icon-centos
   *  - icon-fedora
   *  - icon-debian
   *  - icon-bsd
   *  - icon-windows
   *  - icon-rhel
   *  - icon-opensuse
   *  - icon-ubuntu
   *  - icon-other
   *
   * */
  iconClass: OSIconsEnum;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  /* 	Defines a string value that labels the current element. */
  'aria-label'?: string;
  'data-test-id'?: string;
};

/**
 * This component return an image of the operating system.
 * The iconClass defined into the metadata annotation is used to decide which icon use
 * */
export const OSIcon = ({
  iconClass,
  alt,
  className,
  width,
  height,
  'data-test-id': testId,
}: OSIconProps) => {
  const iconSrc = iconMap[iconClass] || iconMap[OSIconsEnum.OTHER];
  const altTitle = alt || iconClass?.split('-')[1] || iconClass;

  return (
    <img
      src={iconSrc}
      alt={altTitle}
      className={className}
      width={width}
      height={height}
      data-test-id={testId}
    />
  );
};

OSIcon.displayName = 'OSIcon';
