/**
 * @jest-environment jsdom
 */
import getStyles from '@/getStyles'
import setStyle from '@/setStyle'
import byId from '@/byId'
import toHex from '@/toHex'

describe('getStyles() 方法', () => {
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

  it('getStyles() 不传递参数，返回：null', () => {
    expect(getStyles()).toBeNull()
  })

  it('getStyles($list, [])，参数 attrs 不合法，返回：null', () => {
    expect(getStyles($list, [])).toBeNull()
    expect(getStyles($list, 'height')).toBeNull()
  })

  it(`getStyles($list) 获取全部 css 属性，返回：false`, () => {
    setStyle($list, 'background-color', '#fff')
    setStyle($list, 'color', '#222')
    setStyle($list, 'font-size', '13px')

    const rules = getStyles($list, ['background-color', 'color', 'font-size'])

    expect(toHex(rules.backgroundColor)).toEqual('#ffffff')
    expect(toHex(rules.color)).toEqual('#222222')
    expect(rules.fontSize).toEqual('13px')
  })
})
