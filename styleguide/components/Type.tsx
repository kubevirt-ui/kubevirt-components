import React from 'react';
import { Theme } from 'react-styleguidist/lib/typings';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

export const styles = ({ fontFamily, fontSize, color }: Theme) => ({
  type: {
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.small,
    color: color.type,
  },
});

const KUBEVIRT_TYPES = KUBEVIRT_CONSTS.kubevirtTypes;
interface TypeProps extends JssInjectedProps {
  children: React.ReactNode;
}

function getGithubTypeHref(type: string): string {
  return `https://github.com/kubevirt-ui/kubevirt-api/blob/main/${
    KUBEVIRT_CONSTS.KUBEVIRT_MODEL_PATH
  }/${type.replace(/\[\]/, '')}.ts`;
}

function TypeRenderer({ classes, children }: TypeProps) {
  let type = children;

  if (typeof children === 'string' && KUBEVIRT_TYPES.includes(children.replace(/\[\]/, '')))
    type = (
      <a href={getGithubTypeHref(children)} target="_blank" rel="noreferrer">
        {children}
      </a>
    );

  return <span className={classes.type}>{type}</span>;
}

export default Styled<TypeProps>(styles)(TypeRenderer);
