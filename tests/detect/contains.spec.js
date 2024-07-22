/**
 * @jest-environment jsdom
 */
import contains from '@/contains'
import byId from '@/byId'

describe('contains() 方法', () => {
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

  it(`contains() 不传递参数，返回：false`, () => {
    expect(contains()).toEqual(false)
  })

  it(`contains('#list') 仅传递 el 参数，返回：false`, () => {
    const $list = byId('#list')

    expect(contains($list)).toBe(false)
  })

  it(`contains($home, $list) 传递 el（DOM 节点） 和 ancestor 参数，返回：true`, () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    expect(contains($home, $list)).toBe(true)

    $list.contains = null
    expect(contains($home, $list)).toBe(true)
  })

  it(`contains('.item-home', $list) 传递 el（选择器字符串） 和 ancestor 参数，返回：true`, () => {
    const $list = byId('#list')

    expect(contains('.item-home', $list)).toBe(true)
  })
})
