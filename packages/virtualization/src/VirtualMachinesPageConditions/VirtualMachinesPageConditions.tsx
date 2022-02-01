import type { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Popover, PopoverPosition } from '@patternfly/react-core';
import classnames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Label: React.FC<LableProps> = ({ k, v, m }) => {
  const popover = (bodyContent: React.ReactElement, children: React.ReactElement) => (
    <Popover position={PopoverPosition.right} bodyContent={bodyContent}>
      {children}
    </Popover>
  );
  const label = (
    <div
      className={classnames('co-m-label co-m-label--expand', {
        'kv-conditions-list--popover': !!m,
      })}
      key={k}
    >
      <span className="co-m-label__key">{k}</span>
      <span className="co-m-label__eq">: </span>
      <span className="co-m-label__value">{v}</span>
    </div>
  );

  return m ? popover(<p>{m}</p>, <span>{label}</span>) : label;
};

const VirtualMachinesPageConditions: React.FC<VirtualMachinesPageConditionsProps> = ({
  kind,
  obj,
}) => {
  const { t } = useTranslation();
  const conditions = obj.status?.conditions || [];

  return !conditions.length ? (
    <div className="text-muted">{t('kubevirt-plugin~No conditions')}</div>
  ) : (
    <div className={`co-text-${kind}`}>
      {conditions.map((c) => (
        <Label key={c.type} k={c.type} v={c.status} m={c?.message} />
      ))}
    </div>
  );
};

type LableProps = { k: string; v: string; m?: string };

type VirtualMachinesPageConditionsProps = {
  obj: V1VirtualMachine;
  kind: string;
};

export { VirtualMachinesPageConditions };
