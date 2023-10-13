/**
 * @jest-environment jsdom
 */
import getAttributes from '@/getAttributes'
import byId from '@/byId'
import getEl from '@/getEl'

describe('getAttributes() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
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
    '<label for="user" class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />'

  it(`getAttributes() 不传递 el 参数，返回： false`, () => {
    expect(getAttributes()).toBe(false)
  })

  it(`getAttributes($list) 获取 $list 节点所有属性，返回： {"class": "list", "id": "list"}`, () => {
    const $list = byId('#list')
    expect(getAttributes($list)).toEqual({ class: 'list', id: 'list' })
  })

  it(`getAttributes($list, ['class']) 获取 class 属性值，返回： {"class": "list"}`, () => {
    const $list = byId('#list')
    expect(getAttributes($list, ['class'])).toEqual({ class: 'list' })
  })
})
