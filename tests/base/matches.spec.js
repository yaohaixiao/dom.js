/**
 * @jest-environment jsdom
 */
import matches from '@/matches'
import byId from '@/byId'
import hasClass from '@/hasClass'

describe('matches() 方法', () => {
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

  it(`matches() 不传递参数，返回：false`, () => {
    expect(matches()).toBe(false)
  })

  it(`matches($list, '.item-home') 传递参数 filter 参数（字符串），返回：false`, () => {
    const $list = byId('#list')

    expect(matches($list, '.item-home')).toBe(false)
  })

  it(`matches($list, '.list') 传递参数 filter 参数（字符串），返回：true`, () => {
    const $list = byId('#list')

    expect(matches($list, '.list')).toBe(true)
  })
})
