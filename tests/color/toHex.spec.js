/**
 * @jest-environment jsdom
 */
import toHex from '@/toHex'

describe('toHex() 方法', () => {
  const BLACK = 'rgb(0,0,0)'
  const WHITE = 'white'
  const HSL = 'hsl(0,100%,50%)'
  const HEX = '#f00'

  it('toHex() 不传递参数，返回：false', () => {
    expect(toHex()).toBe(false)
  })

  it(`toHex(${BLACK}) 将 16 进制设置转换成 RGB 色值，返回：'#000000'`, () => {
    expect(toHex(BLACK)).toEqual('#000000')
  })

  it(`toHex(${WHITE}) 将 16 进制设置转换成 RGB 色值，返回：'#ffffff'`, () => {
    expect(toHex(WHITE)).toEqual('#ffffff')
  })

  it(`toHex(${HSL}) 将 HSL 格式转换成 16 进制色值，返回：'#ff0000'`, () => {
    expect(toHex(HSL)).toEqual('#ff0000')
  })

  it(`toHex(${HEX}) 已经是 16 进制格式，返回：'#ff0000'`, () => {
    expect(toHex(HEX)).toEqual('#ff0000')
  })
})
