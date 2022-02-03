import React, { PropsWithChildren } from 'react';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

import logo from './logo.png';

const styles = ({ fontFamily, fontSize }: Theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: fontSize.h1,
    fontWeight: 'normal',
  },
  image: {
    width: '2.5em',
    marginRight: '0.5em',
  },
});

interface LogoProps {
  classes: Record<string, string>;
}

function LogoRenderer({ classes, children }: PropsWithChildren<LogoProps>) {
  return (
    <h1 className={classes.logo}>
      <img src={logo} alt="Kubevirt UI" className={classes.image} />
      {children}
    </h1>
  );
}

export default Styled(styles)(LogoRenderer);
