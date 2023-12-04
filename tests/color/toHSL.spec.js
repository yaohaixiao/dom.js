/**
 * @jest-environment jsdom
 */
import toHSL from '@/toHSL'

describe('toHSL() 方法', () => {
  const BLACK = 'rgb(0,0,0)'
  const WHITE = 'white'
  const HSL = 'hsl(0,100%,50%)'
  const HEX = '#f00'

  it('toHSL() 不传递参数，返回：false', () => {
    expect(toHSL()).toBe(false)
  })

  it(`toHSL(${BLACK}) 将 RGB 色值转化未 HSL 格式色值，返回：'hsl(0, 0%, 0%)'`, () => {
    expect(toHSL(BLACK)).toEqual('hsl(0, 0%, 0%)')
  })

  it(`toHSL(${WHITE}) 将颜色字符串转换成 HSL 格式色值，返回：'hsl(0, 0%, 100%)'`, () => {
    expect(toHSL(WHITE)).toEqual('hsl(0, 0%, 100%)')
  })

  it(`toHSL(${HEX}) 将 16 进制色值转换成 HSL 格式色值，返回：'hsl(0, 100%, 50%)'`, () => {
    expect(toHSL(HEX)).toEqual('hsl(0, 100%, 50%)')
  })

  it(`toHSL(${HSL}) 已经是 HSL 格式，返回：${HSL}`, () => {
    expect(toHSL(HSL)).toEqual(HSL)
  })
})
