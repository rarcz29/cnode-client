import { theme } from 'ui/theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
