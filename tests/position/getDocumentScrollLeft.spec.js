/**
 * @jest-environment jsdom
 */
import getDocumentScrollLeft from '@/getDocumentScrollLeft'
import byId from '@/byId'

describe('getDocumentScrollLeft() 方法', () => {
  // Set up our document body
  document.body.innerHTML = '<ul id="list" class="list"></ul>'

  const $list = byId('#list')

  beforeAll(() => {
    document.body.scrollLeft = 20
  })

  afterAll(() => {
    document.body.scrollLeft = 0
  })

  it('getDocumentScrollLeft() 不传递参数，返回：20', () => {
    expect(getDocumentScrollLeft()).toEqual(20)
  })

  it('getDocumentScrollLeft($list.ownerDocument) 不传递参数，返回：20', () => {
    expect(getDocumentScrollLeft($list.ownerDocument)).toEqual(20)
  })

  it('document.body.scrollLeft += 20， 然后 getDocumentScrollLeft($list) 返回：40', () => {
    document.body.scrollLeft += 20
    expect(getDocumentScrollLeft()).toEqual(40)
  })
})
