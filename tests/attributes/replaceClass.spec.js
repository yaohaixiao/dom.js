/**
 * @jest-environment jsdom
 */
import replaceClass from '@/replaceClass'
import getAttribute from '@/getAttribute'
import hasClass from '@/hasClass'
import byId from '@/byId'
import getEl from '@/getEl'

describe('replaceClass() 方法', () => {
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

  it(`replaceClass() 不传参数，返回： false`, () => {
    expect(replaceClass()).toBe(false)
  })

  it(`replaceClass(el) 不传递 oldCls 参数，返回： false`, () => {
    const $home = byId('#item-home')
    expect(replaceClass($home)).toBe(false)
  })

  it(`replaceClass(el, 'text', 'span') 替换不存在的 class，返回： false`, () => {
    const $span = getEl('.item-home > span')

    expect(replaceClass($span, 'text', 'span')).toBe(false)
  })

  it(`replaceClass($home, 'item', 'active')，使用 classList.replace() 方法替换样式`, () => {
    const $home = byId('#item-home')

    replaceClass($home, 'item', 'active')

    expect(getAttribute($home, 'className')).toEqual('active item-home')
    expect(hasClass($home, 'active')).toBe(true)
  })

  it(`replaceClass($list, 'active', item)，不使用 classList.remove 移除样式`, () => {
    const $home = byId('#item-home')

    $home.classList.replace = null
    replaceClass($home, 'active', 'item')

    expect(getAttribute($home, 'className')).toEqual('item item-home')
    expect(hasClass($home, 'item')).toBe(true)
  })
})
