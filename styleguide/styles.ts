import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

const style = ({ color, space }: Theme) => {
  return {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
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
