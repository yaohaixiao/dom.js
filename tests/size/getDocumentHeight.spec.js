/**
 * @jest-environment jsdom
 */
import getDocumentHeight from '@/getDocumentHeight'

describe('getDocumentHeight() 方法', () => {
  it('getDocumentHeight()，返回：768', () => {
    expect(getDocumentHeight()).toEqual(768)
  })
})
