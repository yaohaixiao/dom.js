/**
 * @jest-environment jsdom
 */
import getViewportWidth from '@/getViewportWidth'

describe('getViewportWidth() 方法', () => {
  it('getViewportWidth()，返回：1024', () => {
    expect(getViewportWidth()).toEqual(1024)
  })
})
