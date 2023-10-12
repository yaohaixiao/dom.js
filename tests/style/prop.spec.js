/**
 * @jest-environment jsdom
 */
import prop from '@/prop'

describe('prop() 方法', () => {
  it(`prop() 不传递参数，返回：''`, () => {
    expect(prop()).toEqual('')
  })

  it(`prop('--background-color') 设置样式，返回：'#fff'`, () => {
    prop('--background-color', '#fff')
    expect(prop('--background-color')).toEqual('#fff')
  })
})
