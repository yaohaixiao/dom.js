/**
 * @jest-environment jsdom
 */
import byId from '@/byId'
import hasClass from '@/hasClass'

describe('byId() 方法', () => {
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

  it(`byId('#list') 不传递 el 参数，默认使用 document.querySelector`, () => {
    const $list = byId('#list')

    expect(hasClass($list, 'list')).toBe(true)
  })

  it(`byId('#item-home', $list) 传递 el 参数，使用 $list.querySelector`, () => {
    const $list = byId('#list')
    const $home = byId('#item-home', $list)

    expect(hasClass($home, 'item-home')).toBe(true)
  })
})
