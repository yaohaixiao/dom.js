export const KEYWORDS = {
  black: '000',
  silver: 'c0c0c0',
  gray: '808080',
  white: 'fff',
  maroon: '800000',
  red: 'f00',
  purple: '800080',
  fuchsia: 'f0f',
  green: '008000',
  lime: '0f0',
  olive: '808000',
  yellow: 'ff0',
  navy: '000080',
  blue: '00f',
  teal: '008080',
  aqua: '0ff'
}

export const REG_RGB = /^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i
export const REG_HEX = /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i
export const REG_HEX3 = /([0-9A-F])/gi
