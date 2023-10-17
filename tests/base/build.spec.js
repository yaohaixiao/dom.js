/**
 * @jest-environment jsdom
 */
import build from '@/build'
import isElement from '@/isElement'

describe('build() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`build() 不传递参数，返回：null`, () => {
    expect(build()).toBe(null)
  })

  it(`build('<li>创建textNode</li>') 创建LI节点`, () => {
    const $li = build('<li>创建textNode</li>')

    expect(isElement($li)).toBe(true)
  })
})
