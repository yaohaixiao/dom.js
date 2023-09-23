/**
 * @jest-environment jsdom
 */
import addClass from '@/addClass'
import hasClass from '@/hasClass'
import byId from '@/byId'

describe('addClass() 方法', () => {
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

  const $list = byId('#list')

  it(`addClass() 不传参数，返回： false`, () => {
    expect(addClass()).toBe(false)
  })

  it(`addClass($list, 'nav')，hasClass(#list, 'nav') 返回： true`, () => {
    addClass($list, 'nav')
    expect(hasClass($list, 'nav')).toBe(true)
  })

  it(`addClass() 使用正则表达式处理添加样式逻辑：`, () => {
    $list.classList.add = null
    addClass($list, 'menu')
    expect(hasClass($list, 'menu')).toBe(true)
  })

  it(`使用 addClass() 方法为没有任何 class 值的 DOM 元素添加样式：`, () => {
    $list.className = ''
    addClass($list, 'list')
    expect(hasClass($list, 'list')).toBe(true)
  })
})
