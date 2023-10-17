/**
 * @jest-environment jsdom
 */
import show from '@/show'
import toggle from '@/toggle'
import byId from '@/byId'
import getStyle from '@/getStyle'

describe('show() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-user">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#user" class="remove" data-id="user">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-exit">\n' +
    '    <span>退出</span>\n' +
    '    <a href="/sitemap#exit" class="remove" data-id="exit">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const $list = byId('#list')

  it('show() 不传递参数，返回：false', () => {
    expect(show()).toBe(false)
  })

  it(`show($list) 显示 $list，再使用 getStyle($list, 'display') 返回：'block'`, () => {
    show($list)
    expect(getStyle($list, 'display')).toEqual('block')
  })

  it(`toggle($list) 隐藏 $list，show($list) 显示 $list，再使用 getStyle($list, 'display') 返回：'block'`, () => {
    toggle($list)
    expect(getStyle($list, 'display')).toEqual('none')

    show($list)
    expect(getStyle($list, 'display')).toEqual('block')
  })
})
