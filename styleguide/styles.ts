import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

module.exports = function styles(theme: Theme) {
  return {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
      },
    },
    Code: {
      code: {
        // make inline code example appear the same color as links
        color: theme.color.link,
        fontSize: 14,
      },
    },
  };
};
