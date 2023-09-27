/**
 * @jest-environment jsdom
 */
import index from '@/index'
import byId from '@/byId'

describe('index() 方法', () => {
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

  it(`index() 不传递参数，返回：-1`, () => {
    expect(index()).toEqual(-1)
  })

  it(`index($list) 仅传递 el 参数（DOM 节点），返回：0`, () => {
    const $list = byId('#list')

    expect(index($list)).toEqual(0)
  })

  it(`index('.item-support') 仅传递 el 参数（选择器字符串），返回：1`, () => {
    expect(index('.item-support')).toEqual(1)
  })

  it(`index('.item-home', $list) 传递 el 参数（选择器字符串）和 ancestor 参数，返回：0`, () => {
    const $list = byId('#list')
    expect(index('.item-home', $list)).toEqual(0)
    expect(index('.item-support', $list)).toEqual(1)
    expect(index('.item-faqs', $list)).toEqual(2)
  })
})
