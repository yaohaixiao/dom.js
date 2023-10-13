/**
 * @jest-environment jsdom
 */
import getOffsetParent from '@/getOffsetParent'
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

  it('getOffsetParent() 不传递参数，返回： null', () => {
    expect(getOffsetParent()).toBeNull()
  })

  it('getOffsetParent($home)，返回： $list', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      get() {
        return this.parentNode
      }
    })

    setStyle($list, 'position', 'relative')
    expect(getOffsetParent($home)).toEqual($list)
  })
})
