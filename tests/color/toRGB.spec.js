/**
 * @jest-environment jsdom
 */
import toRGB from '@/toRGB'

describe('toRGB() 方法', () => {
  const BLACK = '#000'
  const WHITE = 'white'

  it('toRGB() 不传递参数，返回：false', () => {
    expect(toRGB()).toBe(false)
  })

  it(`toRGB(${BLACK}) 将 16 进制设置转换成 RGB 色值，返回：'rgb(0, 0, 0)'`, () => {
    expect(toRGB(BLACK)).toEqual('rgb(0, 0, 0)')
  })

  it(`toRGB(${WHITE}) 将 16 进制设置转换成 RGB 色值，返回：'rgb(255, 255, 255)'`, () => {
    expect(toRGB(WHITE)).toEqual('rgb(255, 255, 255)')
  })
})
