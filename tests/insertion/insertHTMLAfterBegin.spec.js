/**
 * @jest-environment jsdom
 */
import insertHTMLAfterBegin from '@/insertHTMLAfterBegin'
import html from '@/html'
import encodeHTML from '@/utils/string/encodeHTML'

describe('insertHTMLAfterBegin() 方法', () => {
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

  const str = '<span>文本内容</span>'
  const encodeStr = encodeHTML(str)

  it(`insertHTMLAfterBegin() 不传递参数，返回： null`, () => {
    expect(insertHTMLAfterBegin()).toBeNull()
  })

  it(`insertHTMLAfterBegin('#item-home', '<span>文本内容</span>') 传递 HTML 字符串（HTML字符串会解析为 DOM 节点 $span），返回： $span`, () => {
    const selector = '#item-home'
    const $span = html(str)

    expect(insertHTMLAfterBegin(selector, str)).toEqual($span)
  })

  it(`insertHTMLAfterBegin('#item-home', '<span>文本内容</span>') 传递 HTML 字符串（HTML字符串作为普通字符串，HTML 标签会 encode），返回： ${encodeStr}`, () => {
    const selector = '#item-home'
    expect(insertHTMLAfterBegin(selector, str, false).textContent).toEqual(encodeStr)
  })
})
