import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

const style = (theme: Theme) => {
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
        fontSize: 14,
      },
    },
  };
};

export default style;
