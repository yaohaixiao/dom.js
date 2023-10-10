/**
 * @jest-environment jsdom
 */
import attrs from '@/attrs'
import byId from '@/byId'

describe('attrs() 方法', () => {
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

  it(`attrs() 不传递参数，返回： null`, () => {
    expect(attrs()).toBeNull()
  })

  it(`attrs($list, 24) 获取异常属性的值，返回：null`, () => {
    const $list = byId('#list')
    expect(attrs($list, 24)).toBeNull()
  })

  it(`attrs($list) 获取 $list 节点所有属性，返回： {"class": "list", "id": "list"}`, () => {
    const $list = byId('#list')
    expect(attrs($list)).toEqual({"class": "list", "id": "list"})
  })

  it(`attrs($list, 'id') 获取 $list 节点单个属性，返回： "list"`, () => {
    const $list = byId('#list')
    expect(attrs($list, 'id')).toEqual('list')
  })

  it(`attrs($list, ['class', 'id']) 获取多个 HTML 属性值，返回： {"class": "list", "id": "list"}`, () => {
    const $list = byId('#list')
    expect(attrs($list, ['class', 'id'])).toEqual({"class": "list", "id": "list"})
  })

  it(`attrs($list, 'id', 'nav') 设置 $list 节点单个属性`, () => {
    const $list = byId('#list')

    attrs($list, 'id', 'nav')
    expect(attrs($list, 'id')).toEqual('nav')
  })

  it(`attrs($list, {'id': 'list', 'data-id': 'nav'}) 设置 $list 节点多个属性，再使用 attrs($list) 获取所有属性，返回：{"class": "list", "data-id": "nav", "id": "list"}`, () => {
    const $list = byId('#nav')

    attrs($list, {'id': 'list', 'data-id': 'nav'})
    expect(attrs($list)).toEqual({"class": "list", "data-id": "nav", "id": "list"})
  })
})
