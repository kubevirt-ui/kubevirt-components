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

export type ConditionLabelProps = {
  message?: string;
  status: string;
  reason: string;
};

/**
 * ConditionLabel renders a k8sStatusConditions.
 * Usefull to give information of what the resouce is doing without taking up much space into the interface.
 *
 * On mouse click it creates a popover to explain the state in a more disursive way.
 * @param {ConditionLabelProps} props is the parrent props object.
 * @param {string} props.message popup message to print when clicking the condition.
 * @param {string} props.status the status of the condition.
 * @param {string} props.reason the condition id.
 */
export const ConditionLabel: React.FC<k8sStatusConditions> = ({ message, status, reason }) => {
  const preventLabelLink = React.useCallback((e) => e.preventDefault(), []);
  const getBodyContent = React.useCallback(() => <div>{message}</div>, [message]);

  return (
    <Popover
      position={PopoverPosition.top}
      aria-label="Condition Popover"
      bodyContent={getBodyContent}
    >
      <Label color="grey" isTruncated href="#" onClick={preventLabelLink}>
        {reason}={status}
      </Label>
    </Popover>
  );
};
ConditionLabel.displayName = 'ConditionLabel';
