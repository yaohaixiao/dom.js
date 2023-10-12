/**
 * @jest-environment jsdom
 */
import css from '@/css'
import byId from '@/byId'

describe('css() 方法', () => {
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

  it('css() 不传递参数，返回：false', () => {
    expect(css()).toBe(false)
  })

  it('css($list, 24) 传递非法的 attr 参数，返回：false', () => {
    expect(css($list, 24)).toBe(false)
  })

  it(`css($list, 'float', left) 不传递参数，返回：false`, () => {
    css($list, 'float', 'left')
    expect(css($list, 'float')).toEqual('left')
  })

  it(`css($list, {'font-size', '14px', color: '#222'}) 不传递参数，返回：false`, () => {
    css($list, {'font-size': '14px', color: '#222'})
    expect(css($list, ['font-size', 'color'])).toEqual({fontSize: '14px', color: 'rgb(34, 34, 34)'})
  })
})
