/**
 * @jest-environment jsdom
 */
import insertAfter from '@/insertAfter'
import byId from '@/byId'
import html from '@/html'
import createElement from '@/createElement'

describe('insertAfter() 方法', () => {
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

  it(`insertAfter() 不传递参数，返回： null`, () => {
    expect(insertAfter()).toBeNull()
  })

  it(`insertAfter($home, $help) 将 $home 插入动态创建的 $help 节点后，返回： null`, () => {
    const HELP =
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n'
    const $help = createElement('li', html(HELP))
    const $home = byId('#item-home')
    expect(insertAfter($home, $help)).toBeNull()
  })

  it(`insertAfter($help, $home) 在 $home 后插入动态创建的 $help 节点，返回： $help`, () => {
    const HELP =
      '  <li class="item-help" data-id="item-help" id="item-help">\n' +
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n' +
      '  </li>\n'
    const $help = html(HELP)
    const $home = byId('#item-home')
    expect(insertAfter($help, $home)).toEqual($help)
  })

  it(`insertAfter($help, $faqs) 在 $faqs 后插入动态创建的 $help 节点，返回： $help`, () => {
    const HELP =
      '  <li class="item-help" data-id="item-help" id="item-help">\n' +
      '    <span>Help</span>\n' +
      '    <a href="/sitemap#help" class="remove" data-id="help">删除</a>\n' +
      '  </li>\n'
    const $help = html(HELP)
    const $faqs = byId('#item-faqs')
    expect(insertAfter($help, $faqs)).toEqual($help)
  })

  it(`insertAfter($support, $faqs) 在 $faqs 后插入已存在的 $support 节点（移动$support节点），返回： $support`, () => {
    const $faqs = byId('#item-faqs')
    const $support = byId('#item-support')
    expect(insertAfter($support, $faqs)).toEqual($support)
  })
})
