import * as React from 'react';

import { Label, Popover, PopoverPosition } from '@patternfly/react-core';
export interface k8sStatusConditions {
  /**
   * Type indicate which type of condition is.
   */
  type: string;
  /**
   * Status is the high level overview of how the resource is doing. It contains information available to controllers and users.
   */
  status?: string;
  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   */
  reason?: string;
  /**
   * A human-readable description of the cause of the error. This field may be presented as-is to a reader.
   */
  message?: string;
}

/**
 * ConditionLabel renders a k8sStatusConditions.
 * Usefull to give information of what the resouce is doing without taking up much space into the interface.
 *
 * On mouse click it creates a popover to explain the state in a more disursive way.
 */
export const ConditionLabel: React.FC<k8sStatusConditions> = React.memo((condition) => {
  const preventLabelLink = React.useCallback((e) => e.preventDefault(), []);
  const getBodyContent = React.useCallback(
    () => <div>{condition?.message}</div>,
    [condition?.message],
  );

  return (
    <Popover
      position={PopoverPosition.top}
      aria-label="Condition Popover"
      bodyContent={getBodyContent}
    >
      <Label color="grey" isTruncated href="#" onClick={preventLabelLink}>
        {condition?.reason}={condition?.status}
      </Label>
    </Popover>
  );
});
ConditionLabel.displayName = 'ConditionLabel';
