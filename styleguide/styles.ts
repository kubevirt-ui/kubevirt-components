import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

const style = ({ color, space }: Theme) => {
  return {
    Section: {
      root: {
        '&:not(:last-child)': {
          borderBottom: [[2, 'solid', color.base]],
        },
      },
    },
    Heading: {
      heading: {
        scrollMarginTop: '1.5em',
      },
    },
    Para: {
      para: {
        color: color.light,
      },
    },
    Link: {
      link: {
        '&, &:link, &:visited': {
          fontSize: 'inherit',
          color: '#4a4a4a',
          textDecoration: 'none',
        },
      },
    },
    ComponentsList: {
      isSelected: {
        borderLeft: [[2, 'solid', color.link]],
        paddingLeft: space[0],
      },
    },
  };
};

export default style;
