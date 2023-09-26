/**
 * @jest-environment jsdom
 */
import canPosition from '@/canPosition'
import byId from '@/byId'
import toggle from '@/toggle'

describe('canPosition() 方法', () => {
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

  it(`canPosition() 不传参数，返回：false`, () => {
    expect(canPosition()).toBe(false)
  })

  it(`canPosition($list) 返回：true`, () => {
    const $list = byId('#list')
    expect(canPosition($list)).toBe(true)
  })

  it(`toggle($list) 隐藏 $list 后，canPosition($list) 返回：false`, () => {
    const $list = byId('#list')

    toggle($list)
    expect(canPosition($list)).toBe(false)
  })
})
