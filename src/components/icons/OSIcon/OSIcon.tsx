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

/**
 * List of the OSs OSIcon can render.
 */
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
  /**
   * The alt attribute holds a text description of the image,
   * which isn't mandatory but is incredibly useful for accessibility —
   * screen readers read this description out to their users so they know what the image means.
   */
  alt?: string;
  /**
   * Additional classes added to the image.
   */
  className?: string;
  /**
   * The intrinsic width of the image. Could be a string or a number of pixels.
   */
  width?: string | number;
  /**
   * The intrinsic height of the image. Could be a string or a number of pixels.
   */
  height?: string | number;
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string;
  /**
   * Data attribute for end-to-end testing
   */
  'data-test-id'?: string;
};

/**
 * OSIcon component return an image of an operating system.
 * The iconClass defined into the metadata annotation is used to decide which icon use.
 *
 * The OSIconsEnum is exported with the OSIcon and it represent the possible icons available with this component.
 *
 * OSIcon use a standard HTML img tag to render the right os image for you.
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
