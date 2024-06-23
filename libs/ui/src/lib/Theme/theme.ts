import { ThemeProps } from 'styled-components';
import { colorPalette } from './colorPalette';

const baseColors = {
  'font.color': colorPalette.black[700],
  'background.color': colorPalette.grey[200],
  'header.background.color': colorPalette.white[800],
  'products.card.price.discount.text': colorPalette.red[600],
  'products.grid.background': colorPalette.white[800],
  'banner.background': colorPalette.grey[400],
  'products.color.beige': colorPalette.beige[400],
  'products.color.blue': colorPalette.blue[300],
  'products.color.navy': colorPalette.blue[700],
  'products.color.brown': colorPalette.brown[400],
  'products.color.green': colorPalette.green[700],
  'products.color.grey': colorPalette.grey[300],
  'products.color.khaki': colorPalette.khaki[500],
  'products.color.purple': colorPalette.purple[400],
  'products.color.red': colorPalette.red[300],
  'products.color.yellow': colorPalette.yellow[400],
};
const baseSpacing = {
  '5xs': '0.2rem',
  '4xs': '0.4rem',
  '3xs': '0.8rem',
  '2xs': '1rem',
  xs: '1.2rem',
  sm: '1.4rem',
  base: '1.6rem',
  l: '1.8rem',
  xl: '2rem',
  '2xl': '2.2rem',
  '3xl': '2.4rem',
};
const baseFonts = {
  primary: 'Montserrat',
};

export type BaseColors = typeof baseColors;
export type BaseSpacing = typeof baseSpacing;
export type BaseFonts = typeof baseFonts;
export interface Theme<
  Colors extends BaseColors,
  Spacing extends BaseSpacing,
  Fonts extends BaseFonts
> {
  colors: Colors;
  spacing: Spacing;
  fonts: Fonts;
}
export type BaseTheme = Theme<BaseColors, BaseSpacing, BaseFonts>;

export const color = (color: keyof BaseTheme['colors']) => {
  return (props: ThemeProps<BaseTheme>) => props.theme.colors[color];
};
export const spacing = (spacing: keyof BaseTheme['spacing']) => {
  return (props: ThemeProps<BaseTheme>) => props.theme.spacing[spacing];
};
export const font = (font: keyof BaseTheme['fonts']) => {
  return (props: ThemeProps<BaseTheme>) => props.theme.fonts[font];
};

export const theme: BaseTheme = {
  colors: baseColors,
  spacing: baseSpacing,
  fonts: baseFonts,
};
