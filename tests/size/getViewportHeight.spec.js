/**
 * @jest-environment jsdom
 */
import getViewportHeight from '@/getViewportHeight'

describe('getViewportHeight() 方法', () => {
  it('getViewportHeight()，返回：768', () => {
    expect(getViewportHeight()).toEqual(768)
  })
})
