/**
 * @jest-environment jsdom
 */
import getHostOrParent from '@/getHostOrParent'

describe('getHostOrParent() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it('options.host 存在，返回： options.host', () => {
    const $faqs = document.querySelector('#item-faqs')
    const $parent = getHostOrParent($faqs)

    $parent.host = document.body

    expect(getHostOrParent($parent)).toEqual(document.body)
  })

  it('options.host 不存在，返回： options.parentNode', () => {
    const $faqs = document.querySelector('#item-faqs')
    const $parent = getHostOrParent($faqs)
    const $linkFaqs = document.querySelector('a[data-id="faqs"]')

    expect($parent).toEqual($faqs.parentNode)
    expect(getHostOrParent($linkFaqs)).toEqual($faqs)
  })
})
