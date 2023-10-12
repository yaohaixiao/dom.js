/**
 * @jest-environment jsdom
 */
import getProperty from '@/getProperty'
import setProperty from '@/setProperty'

describe('getProperty() 方法', () => {
  it(`getProperty() 不传递参数，返回：''`, () => {
    expect(getProperty()).toEqual('')
  })

  it(`getProperty('--background-color') 不传递参数，返回：'#fff'`, () => {
    setProperty('--background-color', '#fff')
    expect(getProperty('--background-color')).toEqual('#fff')
  })
})
