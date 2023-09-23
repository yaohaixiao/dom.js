/**
 * @jest-environment jsdom
 */
import getEl from '@/getEl'
import hasClass from '@/hasClass'

describe('getEl() 方法', () => {
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

  it(`getEl() 不传递参数，返回：null`, () => {
    expect(getEl()).toEqual(null)
  })

  it(`getEl('#item-home') 获取单个 DOM 元素，使用 $list.querySelector`, () => {
    const $list = getEl('#list')
    const $home = getEl('#item-home', $list)

    expect(hasClass($home, 'item-home')).toBe(true)
  })

  it(`getEl('.item', true) 获取多个 DOM 元素，使用 document.querySelectorAll`, () => {
    const $items = getEl('.item', true)

    expect($items.length).toEqual(3)
  })
})
