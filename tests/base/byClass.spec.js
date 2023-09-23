/**
 * @jest-environment jsdom
 */
import byClass from '@/byClass'
import byId from '@/byId'
import hasClass from '@/hasClass'

describe('byClass() 方法', () => {
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

  it(`byClass() 不传递参数，返回：null`, () => {
    expect(byClass()).toEqual(null)
  })

  it(`byClass('.item') 不传递 el 参数，使用 document.querySelectorAll`, () => {
    const $items = byClass('.item')

    expect($items.length).toEqual(3)
  })

  it(`byClass('.item', $list) 传递 el 参数，使用 $list.querySelectorAll`, () => {
    const $list = byId('#list')
    const $items = byClass('.item', $list)

    expect(hasClass($list, 'list')).toBe(true)
    expect($items.length).toEqual(3)
  })
})
