/**
 * @jest-environment jsdom
 */
import text from '@/text'
import byId from '@/byId'
import isTextNode from '@/utils/types/isTextNode'

describe('text() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
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

  it(`text() 不传递参数，返回：false`, () => {
    expect(text()).toBe(false)
  })

  it(`text($text) 获取 $text 节点的文本内容，返回：'Home'`, () => {
    const $text = byId('#text')
    expect(text($text)).toEqual('Home')
  })

  it(`text($text, 'Homepage') 设置 $text 节点的文本内容，再使用 text($text) 获取 $text 节点的文本内容，返回：'Homepage'`, () => {
    const $text = byId('#text')

    text($text, 'Homepage')
    expect(text($text)).toEqual('Homepage')
  })

  it(`text('创建textNode') 创建文本节点`, () => {
    const $text = text('创建textNode')

    expect(isTextNode($text)).toBe(true)
  })
})
