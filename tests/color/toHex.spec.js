/**
 * @jest-environment jsdom
 */
import toHex from '@/toHex'

describe('toHex() 方法', () => {
  const BLACK = 'rgb(0,0,0)'
  const WHITE = 'white'

  it('toHex() 不传递参数，返回：false', () => {
    expect(toHex()).toBe(false)
  })

  it(`toHex(${BLACK}) 将 16 进制设置转换成 RGB 色值，返回：'#000000'`, () => {
    expect(toHex(BLACK)).toEqual('#000000')
  })

  it(`toHex(${WHITE}) 将 16 进制设置转换成 RGB 色值，返回：'#ffffff'`, () => {
    expect(toHex(WHITE)).toEqual('#ffffff')
  })
})
