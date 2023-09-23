/**
 * @jest-environment jsdom
 */
import hasClass from '@/hasClass'
import byId from '@/byId'

describe('hasClass() 方法', () => {
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

  it(`hasClass() 不传递参数，返回： false`, () => {
    expect(hasClass()).toBe(false)
  })

  it(`hasClass($list) 不传递 className 参数，返回： false`, () => {
    const $list = byId('#list')
    expect(hasClass($list)).toBe(false)
  })

  it(`hasClass($list, 'item')，返回： false`, () => {
    const $list = byId('#list')
    expect(hasClass($list, 'item')).toBe(false)
  })

  it(`hasClass($list, 'list')，使用 classList.contains() 方法检测，返回： true`, () => {
    const $list = byId('#list')
    expect(hasClass($list, 'list')).toBe(true)
  })

  it(`hasClass($support, 'item-support')，不使用 classList.contains() 方法检测，返回： true`, () => {
    const $support = byId('#item-support')

    $support.classList.contains = null

    expect(hasClass($support, 'item')).toBe(true)
    expect(hasClass($support, 'item-support')).toBe(true)
    expect(hasClass($support, 'item-ok')).toBe(true)
  })
})
