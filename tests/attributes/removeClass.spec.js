/**
 * @jest-environment jsdom
 */
import removeClass from '@/removeClass'
import getAttribute from '@/getAttribute'
import hasClass from '@/hasClass'
import byId from '@/byId'

describe('removeClass() 方法', () => {
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

  it(`removeClass() 不传递 el 参数，返回： false`, () => {
    expect(removeClass()).toBe(false)
  })

  it(`removeClass(el) 不传递 className 参数，返回： false`, () => {
    const $home = byId('#item-home')
    expect(removeClass($home)).toBe(false)
  })

  it(`removeClass($home, 'item')，返回： false`, () => {
    const $home = byId('#item-home')

    removeClass($home, 'item')

    expect(getAttribute($home, 'className')).toEqual('item-home')
    expect(hasClass($home, 'item')).toBe(false)
  })
})
