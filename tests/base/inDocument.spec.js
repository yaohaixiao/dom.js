/**
 * @jest-environment jsdom
 */
import inDocument from '@/inDocument'
import byId from '@/byId'
import text from '@/text'
import html from '@/html'

describe('inDocument() 方法', () => {
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

  it(`inDocument() 不传递参数，返回：false`, () => {
    expect(inDocument()).toBe(false)
  })

  it(`动态创建 DOM 节点，但未追加到文档中，inDocument($text) 返回：false`, () => {
    const $text = text('动态创建 DOM 节点')

    expect(inDocument($text)).toBe(false)
  })

  it(`查询文档中已有的 DOM 节点，inDocument($list) ，返回：true`, () => {
    const $list = byId('#list')
    const $li = html('<li class="item item-help" id="item-help">Help</li>')

    expect(inDocument($list)).toBe(true)
  })
})
