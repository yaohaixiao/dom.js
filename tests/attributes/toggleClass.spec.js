/**
 * @jest-environment jsdom
 */
import toggleClass from '@/toggleClass'
import byId from '@/byId'
import hasClass from '@/hasClass'

describe('toggleClass() 方法', () => {
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

  it(`toggleClass() 不传递参数，返回： false`, () => {
    expect(toggleClass()).toBe(false)
  })

  it(`toggleClass($list) 不传递 clasName 参数，返回： false`, () => {
    const $list = byId('#list')
    expect(toggleClass($list)).toBe(false)
  })

  it(`toggleClass($list, 'list') 使用 classList.toggle() 方法，然后再使用 hasClass($list, 'list')检测，返回： false`, () => {
    const $list = byId('#list')

    toggleClass($list, 'list')
    expect(hasClass($list, 'list')).toBe(false)
  })

  it(`toggleClass($list, 'list') 不使用 classList.toggle() 方法，然后再使用 hasClass($list, 'list')检测，返回： true`, () => {
    const $list = byId('#list')

    $list.classList.toggle = null

    toggleClass($list, 'list')
    expect(hasClass($list, 'list')).toBe(true)

    toggleClass($list, 'list')
    expect(hasClass($list, 'list')).toBe(false)
  })
})
