import { Theme } from 'react-styleguidist/lib/typings/RsgTheme';

const customTheme: Partial<Theme> = {
  fontFamily: {
    base: ['Helvetica', 'sans-serif'],
    monospace: ['Helvetica', 'sans-serif'],
  },
  fontSize: {
    base: 13,
    text: 14,
    small: 12,
    h1: 44,
    h2: 28,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 16,
  },
};

export default customTheme;
