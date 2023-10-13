/**
 * @jest-environment jsdom
 */
import isMatched from '@/isMatched'
import byId from '@/byId'
import hasClass from '@/hasClass'

describe('isMatched() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`isMatched() 不传递参数，返回：false`, () => {
    expect(isMatched()).toBe(false)
  })

  it(`isMatched($list, '.item-home') 传递参数 filter 参数（字符串），返回：false`, () => {
    const $list = byId('#list')

    expect(isMatched($list, '.item-home')).toBe(false)
    expect(isMatched($list, '.list')).toBe(true)
  })

  it(`isMatched($list, (el)=>{return hasClass(el, '.list')})) 传递参数 filter 参数（函数），返回：false`, () => {
    const $list = byId('#list')

    expect(
      isMatched($list, (el) => {
        return hasClass(el, 'list')
      })
    ).toBe(true)
    expect(
      isMatched($list, (el) => {
        return el.id === '#item-home'
      })
    ).toBe(false)
  })
})
