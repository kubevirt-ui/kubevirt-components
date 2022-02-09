import { Theme } from 'react-styleguidist/lib/typings';
import { RecursivePartial } from 'react-styleguidist/lib/typings/RecursivePartial';

const customTheme: RecursivePartial<Theme> = {
  fontFamily: {
    base: ['var(--pf-global--FontFamily--sans-serif)'],
    monospace: ['var(--pf-global--FontFamily--sans-serif)'],
  },
  fontSize: {
    base: 15,
    text: 15,
    small: 12,
    h1: 44,
    h2: 28,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 16,
  },
  color: {
    base: '#00797F',
    link: '#3accc5',
    name: '#690',
    sidebarBackground: '#fff',
  },
  sidebarWidth: 300,
};

export default customTheme;
