/**
 * @jest-environment jsdom
 */
import isInViewport from '@/isInViewport'
import byId from '@/byId'
import html from '@/html'

describe('isInViewport() 方法', () => {
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

  it(`isInViewport() 不传递参数，返回：false`, () => {
    expect(isInViewport()).toBe(false)
  })

  it(`查询文档中已有的 DOM 节点，isInViewport($list) ，返回：true`, () => {
    const $list = byId('#list')

    expect(isInViewport($list)).toBe(true)
  })

  it(`动态创建 DOM 节点，不追加但当前文档，isInViewport($li) ，返回：false`, () => {
    const $li = html('<li class="item item-help" id="item-help">Help</li>')

    expect(isInViewport($li)).toBe(false)
  })

  it(`动态创建 DOM 节点，追加但当前文档，isInViewport($li) ，返回：true`, () => {
    const $list = byId('#list')
    let $li = html('<li class="item item-help" id="item-help">Help</li>')

    $list.appendChild($li)
    $li = byId('#item-help', $list)
    $li.getBoundingClientRect = jest.fn(() => ({
      x: 0,
      y: 90,
      width: 10,
      height: 10,
      top: 90,
      right: 10,
      bottom: 10,
      left: 0
    }))

    expect(isInViewport($li)).toBe(true)
  })
})
