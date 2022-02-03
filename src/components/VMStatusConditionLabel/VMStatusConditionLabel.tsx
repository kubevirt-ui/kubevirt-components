import * as React from 'react';

import { V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Label, Popover, PopoverPosition } from '@patternfly/react-core';

export const VMStatusConditionLabel: React.FC<V1VirtualMachineCondition> = React.memo(
  (condition) => {
    return (
      <Popover
        position={PopoverPosition.top}
        aria-label="Condition Popover"
        bodyContent={() => <div>{condition?.message}</div>}
      >
        <Label
          color="grey"
          isTruncated
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {condition?.reason}={condition?.status}
        </Label>
      </Popover>
    );
  },
);
VMStatusConditionLabel.displayName = 'VMStatusConditionLabel';
