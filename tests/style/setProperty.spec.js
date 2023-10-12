/**
 * @jest-environment jsdom
 */
import setProperty from '@/setProperty'
import getProperty from '@/getProperty'

describe('setProperty() 方法', () => {
  it(`setProperty() 不传递参数，返回：false`, () => {
    expect(setProperty()).toEqual(false)
  })

  it(`setProperty('--background-color', '#fff')，然后获取 getProperty('--background-color') 获取属性，返回：'#fff'`, () => {
    setProperty('--background-color', '#fff')
    expect(getProperty('--background-color')).toEqual('#fff')
  })
})
