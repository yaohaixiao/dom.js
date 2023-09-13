/**
 * @jest-environment jsdom
 */
import isCollection from '../isCollection'
import isElement from '../isElement'
import isFragment from '../isFragment'

describe('is() 方法：', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support" id="item-support">\n' +
    '    <span id="text">Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`isCollection(document.getElementById('list')), 返回：false`, () => {
    const $list = document.getElementById('list')

    expect(isElement($list)).toBe(true)
    expect(isCollection($list)).toBe(false)
  })

  it(`isCollection(document.createElement('div')), 返回：false`, () => {
    const $div = document.createElement('div')

    expect(isElement($div)).toBe(true)
    expect(isCollection($div)).toBe(false)
  })

  it(`isCollection(document.createTextNode('text')), 返回：false`, () => {
    const $text = document.createTextNode('text')

    expect(isElement($text)).toBe(false)
    expect(isCollection($text)).toBe(false)
  })

  it(`isCollection(document.createDocumentFragment()), 返回：false`, () => {
    const $fragment = document.createDocumentFragment()

    expect(isElement($fragment)).toBe(false)
    expect(isFragment($fragment)).toBe(true)
    expect(isCollection($fragment)).toBe(false)
  })

  it(`isCollection(document.querySelectorAll('.item')), 返回：true`, () => {
    const $items = document.querySelectorAll('.item')

    expect(isElement($items)).toBe(false)
    expect(isCollection($items)).toBe(true)
  })
})
