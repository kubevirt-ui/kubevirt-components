import * as React from 'react';

import { V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Label, Popover, PopoverPosition } from '@patternfly/react-core';

export const VMStatusConditionLabel: React.FC<V1VirtualMachineCondition> = React.memo(
  (condition) => {
    function preventLabelLink(e: React.MouseEvent) {
      return e.preventDefault();
    }

    function getBodyContent() {
      return <div>{condition?.message}</div>;
    }

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
  },
);
VMStatusConditionLabel.displayName = 'VMStatusConditionLabel';
