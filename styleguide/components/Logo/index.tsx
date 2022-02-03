import React, { PropsWithChildren } from 'react';
import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

import logo from './logo.png';

const styles = ({ fontFamily }: Theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: fontFamily.base,
    fontSize: 18,
  },
  image: {
    width: '2.5em',
    marginRight: '0.5em',
  },
});

function LogoRenderer({ classes, children }: PropsWithChildren<JssInjectedProps>) {
  return (
    <h1 className={classes.logo}>
      <img src={logo} alt="Kubevirt UI" className={classes.image} />
      {children}
    </h1>
  );
}

export default Styled(styles)(LogoRenderer);
