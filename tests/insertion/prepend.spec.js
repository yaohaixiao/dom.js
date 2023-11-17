/**
 * @jest-environment jsdom
 */
import prepend from '@/prepend'
import byId from '@/byId'
import html from '@/html'
import text from '@/text'
import createElement from '@/createElement'

describe('prepend() 方法', () => {
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

  it(`prepend() 不传递参数，返回： null`, () => {
    expect(prepend()).toBeNull()
  })

  it(`prepend(24, $list) 传递非法参数，返回： null`, () => {
    expect(prepend(24, $list)).toBeNull()
  })

  it(`prepend($help, $list) 在 $list 节点最前面插入动态创建的 $help 节点，返回： $help`, () => {
    const HELP =
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n'
    const $help = createElement('li', html(HELP))

    expect(prepend($help, $list)).toEqual($help)
    expect($list.firstChild.tagName.toLowerCase()).toEqual('li')
  })

  it(`prepend('help', $list) 在 $list 节点最前面插入普通字符串（字符串会动态创建为 $text 文本节点），返回： $text`, () => {
    const HELP = 'help'
    const $text = text(HELP)

    expect(prepend(HELP, $list)).toEqual($text)
    expect($list.firstChild).toEqual($text)
  })

  it(`prepend(HELP, $list) 在 $list 节点最前面插入 HTML 字符串（HTML 字符串会解析动态创建为 $help 节点），返回： $help`, () => {
    const HELP =
      '<li class="item-help" data-id="item-help" id="item-help">' +
      '<span>Help</span>' +
      '<a href="/sitemap#help" class="remove" data-id="help">删除</a>' +
      '</li>'

    prepend(HELP, $list)

    expect($list.firstChild.id).toEqual('item-help')
  })

  it(`使用 JavaScript 内置 API 的 prepend() 方法实现`, () => {
    const FAQS =
      '<li class="item-faqs" data-id="item-faqs" id="item-faqs">' +
      '<span>Faqs</span>' +
      '<a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>' +
      '</li>'

    $list.prepend = null

    prepend(FAQS, $list)
    expect($list.firstChild.id).toEqual('item-faqs')

    const $item = createElement('li')

    $item.className = 'item-links'

    prepend($item, $list)
    expect($list.firstChild.className).toEqual('item-links')

    const nav = 'Navigation'

    prepend(nav, $list)
    expect($list.firstChild.textContent).toEqual(nav)
  })
})
