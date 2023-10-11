/**
 * @jest-environment jsdom
 */
import getDocumentWidth from '@/getDocumentWidth'

describe('getDocumentWidth() 方法', () => {
  it('getDocumentWidth()，返回：768', () => {
    expect(getDocumentWidth()).toEqual(1024)
  })
})
