import React, { PropsWithChildren } from 'react';
import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';
import classnames from 'classnames';
import Logo from 'rsg-components/Logo';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const xsmall = '@media (max-width: 600px)';

const styles = ({ fontFamily, color, mq, sidebarWidth, space }: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  header: {
    color: '#fff',
    backgroundColor: color.link,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '75px',
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]],
    },
  },
  headerLink: {
    '&, &:link, &:visited': {
      marginLeft: '0.5em',
      marginRight: '0.5em',
      fontFamily: fontFamily.base,
      color: '#fff',
    },
    '&:hover, &:active': {
      color: '#fff',
      cursor: 'pointer',
    },
  },
  content: {
    maxWidth: 1000,
    padding: [[15, 30]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: 15,
    },
    display: 'block',
  },
  sections: {
    marginTop: '80px',
  },
  components: {
    overflow: 'auto', // To prevent the pane from growing out of the screen
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: 12,
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: '75px',
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
});

interface StyleGuideRendererProps extends JssInjectedProps {
  title: string;
  version?: string;
  homepageUrl: string;
  children: React.ReactNode;
  toc?: React.ReactNode;
  hasSidebar?: boolean;
}

function StyleGuideRenderer({
  classes,
  title,
  children,
  version,
  toc,
  hasSidebar,
}: PropsWithChildren<StyleGuideRendererProps>) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.content}>
          <div className={classes.bar}>
            <Logo>{title}</Logo>
            <nav className={classes.nav}>
              <a
                className={classes.headerLink}
                href="https://github.com/kubevirt-ui/kubevirt-ui-components"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className={hasSidebar ? classes.hasSidebar : ''}>
        <main className={classnames(classes.content, classes.sections)}>{children}</main>
        {hasSidebar && (
          <div className={classes.sidebar} data-testid="sidebar">
            {toc}
          </div>
        )}
      </div>
    </div>
  );
}
export default Styled<StyleGuideRendererProps>(styles)(StyleGuideRenderer);
