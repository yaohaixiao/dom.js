/**
 * @jest-environment jsdom
 */
import getScrollParent from '@/getScrollParent'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('getOffsetParent() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it('getScrollParent() 不传递参数，返回： null', () => {
    expect(getScrollParent()).toBeNull()
  })

  it('getScrollParent(document.documentElement)，返回： document.documentElement', () => {
    const $root = document.documentElement
    expect(getScrollParent($root)).toEqual($root)

    document.body.scrollTop = 1

    expect(getScrollParent(document)).toEqual(document)
  })

  it('getScrollParent($home)，返回： $list', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    setStyle($list, 'overflow', 'auto')
    expect(getScrollParent($home)).toEqual($list)

    setStyle($list, 'overflow', 'hidden')
    setStyle($list, 'overflow-y', 'auto')
    expect(getScrollParent($home)).toEqual($list)

    setStyle($list, 'overflow', 'hidden')
    setStyle($list, 'overflow-x', 'auto')
    expect(getScrollParent($home)).toEqual($list)

    setStyle($list, 'overflow-x', 'hidden')
    setStyle($list, 'overflow-y', 'hidden')
    setStyle($list, 'overflow', 'hidden')
    expect(getScrollParent($home)).toEqual(document.body)
  })
})
