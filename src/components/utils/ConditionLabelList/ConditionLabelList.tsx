import * as React from 'react';

import { LabelGroup } from '@patternfly/react-core';

import { ConditionLabel } from '../ConditionLabel';
import { k8sStatusConditions } from '../ConditionLabel/ConditionLabel';

export interface ConditionLabelListProps {
  /**
   * Array of k8s status conditions.
   * k8s status conditions are similar to [KubeVirt Condition](https://kubevirt.io/api-reference/master/definitions.html#_v1_kubevirtcondition) but can represent also different kind of conditions
   */
  conditions: k8sStatusConditions[];
}

/**
 * ConditionLabelList renders a list of a k8s resource conditions.
 *
 * This component can me usefull to give an in dept clues of what the resourse is doing.
 * */
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
