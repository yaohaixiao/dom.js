/**
 * @jest-environment jsdom
 */
import clone from '@/clone'
import byId from '@/byId'
import hasClass from '@/hasClass'
import isElement from '@/isElement'

describe('clone() 方法', () => {
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

  it(`clone() 不传递参数，返回：null`, () => {
    expect(clone()).toEqual(null)
  })

  it(`clone($list) 不传递 deep 参数，仅克隆 $list 节点`, () => {
    const $list = byId('#list')
    const $clone = clone($list)

    expect(isElement($clone)).toBe(true)
    expect(hasClass($clone, 'list')).toBe(true)
    expect($clone.firstChild).toBe(null)
  })

  it(`$clone($list, true) 传递 deep 参数，且设置为 true，深克隆 $list`, () => {
    const $list = byId('#list')
    const $clone = clone($list, true)

    expect(byId('#item-home', $clone).id).toEqual('item-home')
  })
})
