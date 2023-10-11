/**
 * @jest-environment jsdom
 */
import setStyle from '@/setStyle'
import getStyle from '@/getStyle'
import byId from '@/byId'

describe('setStyle() 方法', () => {
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

  it('setStyle() 不传递参数，返回：false', () => {
    expect(setStyle()).toBe(false)
  })

  it(`setStyle($list, 'float', left) 不传递参数，返回：false`, () => {
    setStyle($list, 'float', 'left')
    expect(getStyle($list, 'float')).toEqual('left')
  })

  it(`setStyle($list, 'font-size', '14px') 不传递参数，返回：false`, () => {
    setStyle($list, 'font-size', '14px')
    expect(getStyle($list, 'font-size')).toEqual('14px')
  })
})
