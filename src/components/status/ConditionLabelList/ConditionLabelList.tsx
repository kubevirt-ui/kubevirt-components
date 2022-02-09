import * as React from 'react';

import { V1KubeVirtCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { LabelGroup } from '@patternfly/react-core';

import { ConditionLabel } from '../ConditionLabel';

/**
 * VirtualMachineCondition renders a list of a k8s resource conditions
 * */
export interface ConditionLabelListProps {
  conditions: V1KubeVirtCondition[];
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
