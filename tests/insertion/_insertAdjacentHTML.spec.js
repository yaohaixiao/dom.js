/**
 * @jest-environment jsdom
 */
import _insertAdjacentHTML from '@/_insertAdjacentHTML'
import createElement from '@/createElement'
import byId from '@/byId'
import html from '@/html'
import isText from '@/isText'
import encodeHTML from '@/utils/string/encodeHTML'

describe('_insertAdjacentHTML() 方法', () => {
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

  it(`_insertAdjacentHTML() 不传递参数，返回： null`, () => {
    expect(_insertAdjacentHTML()).toBeNull()
  })

  it(`_insertAdjacentHTML($list, 'beforebegin', '文本内容')，str 参数不是合法的 HTML 标签字符串，返回： null`, () => {
    const $list = byId('#list')
    const text = '文本内容'

    expect(_insertAdjacentHTML($list, 'beforebegin', text)).toBeNull()
    expect(_insertAdjacentHTML($list, 'afterend', text)).toBeNull()
  })

  it(`_insertAdjacentHTML($li, 'afterend', '<span>文本内容</span>')，el 参数为动态创建的 DOM 元素，position 定位为 'afterend' 或者 'beforebegin'，返回： null`, () => {
    const $li = createElement('div')
    const html = '<span>文本内容</span>'

    expect(_insertAdjacentHTML($li, 'beforebegin', html)).toBeNull()
    expect(_insertAdjacentHTML($li, 'afterend', html)).toBeNull()
  })

  it(`_insertAdjacentHTML($li, 'afterend', '<span>文本内容</span>')，el 参数为 DOM 元素的选择器（没有 parentNode），position 定位为 'afterend' 或者 'beforebegin'，返回： null`, () => {
    const selector = '.no-parent'
    const html = '<span>文本内容</span>'

    expect(_insertAdjacentHTML(selector, 'beforebegin', html)).toBeNull()
    expect(_insertAdjacentHTML(selector, 'afterend', html)).toBeNull()
  })

  it(`_insertAdjacentHTML($home, 'beforebegin', '<span>文本内容</span>')，在 $home 前添加 str 转化的 DOM 节点，返回生成 DOM 节点`, () => {
    const $home = byId('#item-home')
    const $support = byId('#item-support')
    const selector = '#item-home'
    const str = '<span>文本内容</span>'
    const $span = html(str)
    const $text = _insertAdjacentHTML($support, 'beforeend', str, false)
    const $node = _insertAdjacentHTML($support, 'afterend', str, false)

    expect(_insertAdjacentHTML($home, 'beforebegin', str)).toEqual($span)
    expect(_insertAdjacentHTML(selector, 'afterbegin', str)).toEqual($span)
    expect(isText($text)).toBe(true)
    expect($node.textContent).toBe(encodeHTML(str))
  })
})
