import * as React from 'react';

import { LabelGroup } from '@patternfly/react-core';

import { ConditionLabel, k8sStatusConditions } from '../ConditionLabel';

/**
 * VirtualMachineCondition renders a list of a k8s resource conditions
 * */
export interface ConditionLabelListProps {
  conditions: k8sStatusConditions[];
}

export const ConditionLabelList: React.FC<ConditionLabelListProps> = React.memo(
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
ConditionLabelList.displayName = 'ConditionLabelList';
