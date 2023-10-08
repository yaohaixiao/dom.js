/**
 * @jest-environment jsdom
 */
import html from '@/html'
import byId from '@/byId'
import isFragment from '@/utils/types/isFragment'

describe('html() 方法', () => {
  const HOME_INNER = '\n<span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n'

  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">' + HOME_INNER  + '</li>\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`html() 不传递参数，返回：null`, () => {
    expect(html()).toBe(null)
  })

  it(`html($home) 获取 $home 节点的 innerHTML 内容，返回：${HOME_INNER}`, () => {
    const $home = byId('#item-home')
    expect(html($home)).toEqual(HOME_INNER)
  })

  it(`html($home, 'Homepage') 设置 html 节点的文本内容，再使用 html($text) 获取节点的文本内容，返回：'Homepage'`, () => {
    const $home = byId('#item-home')

    html($home, 'Homepage')
    expect(html($home)).toEqual('Homepage')
  })

  it(`html('<li>创建textNode</li>') 创建LI节点`, () => {
    const $li = html('<li>创建textNode</li>')

    expect(isFragment($li)).toBe(true)
  })
})
