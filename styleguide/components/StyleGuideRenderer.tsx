import React, { PropsWithChildren } from 'react';
import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';
import classnames from 'classnames';
import Logo from 'rsg-components/Logo';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const xsmall = '@media (max-width: 600px)';

const navbarHeight = '55px';

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
    background: `linear-gradient(to top, ${color.link} 0%, #00aab2 100%)`,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: navbarHeight,
    zIndex: 500,
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
      paddingBottom: space[0],
      borderBottom: [[3, 'solid', '#fed476']],
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
  navbar: {
    padding: [[15, 30]],
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
    position: 'fixed',
    top: navbarHeight,
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
  anchorAsText: {
    '&, &:link, &:visited': {
      color: '#fff',
      cursor: 'pointer',
    },
    '&:hover, &:active': {},
    '& *': {
      cursor: 'pointer',
    },
  },
});

function NavBar({
  classes,
  title,
}: Pick<PropsWithChildren<StyleGuideRendererProps>, 'classes' | 'title'>) {
  return (
    <div className={classes.navbar}>
      <div className={classes.bar}>
        <a href={document.URL.replace(/#.*$/, '#')} className={classes.anchorAsText}>
          <Logo>{title}</Logo>
        </a>
        <nav className={classes.nav}>
          <a className={classes.headerLink} href="https://www.patternfly.org/v4/guidelines/">
            <img
              src="https://raw.githubusercontent.com/kubevirt-ui/kubevirt-components/main/images/GitHub-Mark-32px.png"
              alt="github logo"
            />
            PatternFly 4
          </a>
          <a
            className={classes.headerLink}
            href="https://github.com/kubevirt-ui/kubevirt-components"
          >
            <img
              src="https://raw.githubusercontent.com/kubevirt-ui/kubevirt-components/main/images/GitHub-Mark-32px.png"
              alt="github logo"
            />
            KubeVirt UI
          </a>
        </nav>
      </div>
    </div>
  );
}

interface StyleGuideRendererProps extends JssInjectedProps {
  title: string;
  children: React.ReactNode;
  toc: React.ReactNode;
  hasSidebar: boolean;
}
function StyleGuideRenderer({
  classes,
  title,
  children,
  toc,
  hasSidebar,
}: PropsWithChildren<StyleGuideRendererProps>) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <NavBar classes={classes} title={title} />
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
