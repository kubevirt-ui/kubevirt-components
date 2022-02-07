import * as React from 'react';

import { V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { LabelGroup } from '@patternfly/react-core';

import { VMStatusConditionLabel } from '../VMStatusConditionLabel/VMStatusConditionLabel';

export const VMStatusConditionLabelList: React.FC<{ conditions: V1VirtualMachineCondition[] }> =
  React.memo(({ conditions }) => {
    return (
      <LabelGroup>
        {conditions.map(({ message, reason, status, type }) => (
          <VMStatusConditionLabel
            key={type}
            message={message}
            reason={reason}
            status={status}
            type={type}
          />
        ))}
      </LabelGroup>
    );
  });
VMStatusConditionLabelList.displayName = 'VMStatusConditionLabelList';
