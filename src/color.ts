import tinycolor from "tinycolor2";

const accentColors = [
  '#B71C1C',
  '#880E4F',
  '#4A148C',
  '#311B92',
  '#1A237E',
  '#0D47A1',
  '#01579B',
  '#006064',
  '#004D40',
  '#1B5E20',
  '#33691E',
  '#827717',
  '#F57F17',
  '#FF6F00',
  '#E65100',
  '#BF360C',
  '#3E2723',
  '#212121',
  '#263238',
]

export const defaultColor = '#4A148C'

export const getRandomColor = () => {
  const color = accentColors[Math.floor(Math.random() * accentColors.length)]
  const tinycolorObj = tinycolor(color);


  return tinycolorObj.brighten(50).toString();
}
