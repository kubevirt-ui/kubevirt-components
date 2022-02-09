import * as React from 'react';

import { V1KubeVirtCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Label, Popover, PopoverPosition } from '@patternfly/react-core';

/**
 * ConditionLabel renders a k8sStatusConditions
 */
export const ConditionLabel: React.FC<V1KubeVirtCondition> = React.memo((condition) => {
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
