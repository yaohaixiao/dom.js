/**
 * @jest-environment jsdom
 */
import setStyles from '@/setStyles'
import getStyles from '@/getStyles'
import byId from '@/byId'
import toRGB from '@/toRGB'
import getColor from '@/getColor'

describe('setStyles() 方法', () => {
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

  it('setStyles() 不传递参数，返回：false', () => {
    expect(setStyles()).toBe(false)
  })

  it(`setStyles($list, 'background-color:#fff;font-size:13px;') styles 参数采用 cssText 字符串一次设置多个样式：`, () => {
    setStyles($list, 'background-color:#fff;font-size:13px;')

    const rules = getStyles($list, ['background-color', 'color', 'font-size'])

    expect(getColor($list, 'background-color', false)).toEqual('rgb(255, 255, 255)')
    expect(getColor($list, 'color')).toEqual('transparent')
    expect(rules.fontSize).toEqual('13px')

    setStyles($list, 'color:black;')
    expect(getColor($list, 'color')).toEqual('#000000')
    expect(getColor($list, ['color'])).toBe(false)
  })

  it(`setStyles($list, {'background-color':'#fff',color:'black','font-size': '13px'}) styles 参数采用 Object 对象格式设置多个样式：`, () => {
    setStyles($list, {'background-color':'#fff',color:'black','font-size': '13px'})

    const rules = getStyles($list, ['background-color', 'color', 'font-size'])

    expect(toRGB(rules.backgroundColor)).toEqual('rgb(255, 255, 255)')
    expect(toRGB(rules.color)).toEqual('rgb(0, 0, 0)')
    expect(rules.fontSize).toEqual('13px')
  })
})
