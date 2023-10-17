/**
 * @jest-environment jsdom
 */
import replace from '@/replace'
import byId from '@/byId'
import html from '@/html'
import createElement from '@/createElement'
import isFragment from '@/isFragment'
import isElement from '@/isElement'

describe('replace() 方法', () => {
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

  it(`replace() 不传递参数，返回： null`, () => {
    expect(replace()).toBeNull()
  })

  it(`replace('.list', $list) 传递非法参数，返回： null`, () => {
    expect(replace('.list', $list)).toBeNull()
  })

  it(`replace($anchor, $created) 替换动态创建的 DOM，返回： null`, () => {
    const $anchor = createElement(
      'a',
      {
        className: 'item help',
        'data-id': 'help'
      },
      'help'
    )
    const $created = createElement('li')

    expect(replace($anchor, $created)).toBeNull()
  })

  it(`replace($delete, $home) 用动态创建的 $delete 节点 替换 $home 节点，返回： $delete`, () => {
    const DELETE =
      '    <span>Delete</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="delete">删除</a>\n'
    const $delete = createElement('li', html(DELETE))
    const $home = byId('#item-home')

    expect(replace($delete, $home)).toEqual($delete)
    expect(byId('#item-home')).toBeNull()
  })

  it(`replace(HELP, $support) 用 HTML 字符串（会解析动态创建为 $help 节点）替换 $support 节点，返回： $help`, () => {
    const HELP =
      '  <li class="item-help" data-id="item-help" id="item-help">\n' +
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n' +
      '  </li>\n'
    const $support = byId('#item-support')

    $support.replaceWith = null

    expect(isFragment(replace(HELP, $support))).toBe(true)
    expect(isElement(byId('#item-help'))).toBe(true)
    expect(byId('#item-support')).toBeNull()
  })
})
