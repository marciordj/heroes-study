import 'styled-components';
import theme from './index';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends ThemeType {}
}
