/**
 * @jest-environment jsdom
 */
import getDocumentScrollTop from '@/getDocumentScrollTop'
import byId from '@/byId'

describe('getDocumentScrollTop() 方法', () => {
  // Set up our document body
  document.body.innerHTML = '<ul id="list" class="list"></ul>'

  const $list = byId('#list')

  beforeAll(() => {
    document.body.scrollTop = 20
  })

  afterAll(() => {
    document.body.scrollTop = 0
  })

  it('getDocumentScrollTop() 不传递参数，返回：20', () => {
    expect(getDocumentScrollTop()).toEqual(20)
  })

  it('getDocumentScrollTop($list.ownerDocument) 不传递参数，返回：20', () => {
    expect(getDocumentScrollTop($list.ownerDocument)).toEqual(20)
  })

  it('document.body.scrollTop += 20， 然后 getDocumentScrollTop($list) 返回：40', () => {
    document.body.scrollTop += 20
    expect(getDocumentScrollTop()).toEqual(40)
  })
})
