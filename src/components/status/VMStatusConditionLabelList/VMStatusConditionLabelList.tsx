import * as React from 'react';

import { V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { LabelGroup } from '@patternfly/react-core';

import { ConditionLabel } from '../VMStatusConditionLabel/VMStatusConditionLabel';

/**
 * VirtualMachineCondition renders a list of a k8s resource conditions
 * */
export interface VMStatusConditionLabelListProps {
  conditions: V1VirtualMachineCondition[];
}

export const VMStatusConditionLabelList: React.FC<VMStatusConditionLabelListProps> = React.memo(
  ({ conditions }) => {
    return (
      <LabelGroup>
        {conditions.map(({ message, reason, status, type }) => (
          <ConditionLabel
            key={type}
            message={message}
            reason={reason}
            status={status}
            type={type}
          />
        ))}
      </LabelGroup>
    );
  },
);
VMStatusConditionLabelList.displayName = 'VMStatusConditionLabelList';
