/**
 * @jest-environment jsdom
 */
import removeAttributes from '@/removeAttributes'
import getAttributes from '@/getAttributes'
import byId from '@/byId'

describe('removeAttributes() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" value="item-home" id="item-home">\n' +
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
    '</ul>\n' +
    '<label for="user" class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />\n' +
    '<label for="desc" class="label">用户名：</label><textarea type="text" name="desc" id="desc" value="auhtor of dom.js"></textarea>'

  it(`removeAttributes() 不传递参数，返回： false`, () => {
    expect(removeAttributes()).toBe(false)
  })

  it(`removeAttributes($list, ['className']) 移除 className 属性，然后 getAttributes($list)，返回： {"id": "list"}`, () => {
    const $list = byId('#list')

    expect(getAttributes($list)).toEqual({ class: 'list', id: 'list' })

    removeAttributes($list, ['className'])
    expect(getAttributes($list, ['id'])).toEqual({ id: 'list' })
  })

  it(`removeAttributes($list) 移除全部 HTML 属性，然后 getAttributes($list)，返回： {}`, () => {
    const $list = byId('#list')

    expect(getAttributes($list, ['id'])).toEqual({ id: 'list' })

    removeAttributes($list)
    expect(getAttributes($list, ['id'])).toEqual({})
  })
})
