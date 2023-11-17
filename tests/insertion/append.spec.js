/**
 * @jest-environment jsdom
 */
import append from '@/append'
import byId from '@/byId'
import html from '@/html'
import text from '@/text'
import createElement from '@/createElement'

describe('append() 方法', () => {
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

  const $list = byId('#list')

  it(`append() 不传递参数，返回： null`, () => {
    expect(append()).toBeNull()
  })

  it(`append(24, $list) 传递非法参数，返回： null`, () => {
    expect(append(24, $list)).toBeNull()
  })

  it(`append($help, $list) 在 $list 节点最后面插入动态创建的 $help 节点，返回： $help`, () => {
    const HELP =
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n'
    const $help = createElement('li', html(HELP))

    expect(append($help, $list)).toEqual($help)
    expect($list.lastChild).toEqual($help)
  })

  it(`append('help', $list) 在 $list 节点最后面插入普通字符串（字符串会动态创建为 $text 文本节点），返回： $text`, () => {
    const HELP = 'help'
    const $text = text(HELP)

    expect(append(HELP, $list)).toEqual($text)
    expect($list.lastChild).toEqual($text)
  })

  it(`prepend(HELP, $list) 在 $list 节点最后面插入 HTML 字符串（HTML 字符串会解析动态创建为 $help 节点），返回： $help`, () => {
    const HELP =
      '<li class="item-help" data-id="item-help" id="item-help">' +
      '<span>Help</span>' +
      '<a href="/sitemap#help" class="remove" data-id="help">删除</a>' +
      '</li>'

    append(HELP, $list)
    expect($list.lastChild.id).toEqual('item-help')
  })

  it(`使用 JavaScript 内置 API 的 append() 方法实现`, () => {
    const FAQS =
      '<li class="item-faqs" data-id="item-faqs" id="item-faqs">' +
      '<span>Faqs</span>' +
      '<a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>' +
      '</li>'

    $list.prepend = null

    append(FAQS, $list)
    expect($list.lastChild.id).toEqual('item-faqs')

    const $item = createElement('li')

    $item.className = 'item-links'

    append($item, $list)
    expect($list.lastChild.className).toEqual('item-links')

    const nav = 'Navigation'

    append(nav, $list)
    expect($list.lastChild.textContent).toEqual(nav)
  })
})
