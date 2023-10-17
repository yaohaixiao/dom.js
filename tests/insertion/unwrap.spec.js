/**
 * @jest-environment jsdom
 */
import unwrap from '@/unwrap'
import byId from '@/byId'
import byClass from '@/byClass'

describe('unwrap() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '    <div class="wrap">\n' +
    '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '    </div>\n' +
    '    <div class="wrap">\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '    </div>\n' +
    '    <div class="wrap">\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '    </div>\n' +
    '</ul>\n'

  const $list = byId('#list')

  it(`unwrap() 不传递参数，返回： false`, () => {
    expect(unwrap()).toBe(false)
  })

  it(`unwrap($items, 24) 传递非法参数，返回： false`, () => {
    const $items = byClass('.item', $list)

    expect(unwrap($items, 24)).toBe(false)
  })

  it(`unwrap($items, '.wrap') 无法查询到 $items 匹配的 NodeList，返回： false`, () => {
    const $items = byClass('.menu', $list)

    expect(unwrap($items, '.wrap')).toBe(false)
  })

  it(`unwrap($items, '.wrap') 传递非法参数，返回： false`, () => {
    let $items = byClass('.item', $list)
    let $wraps

    unwrap($items, '.wrap')
    $wraps = byClass('.wrap', $list)

    expect($wraps.length).toEqual(0)
  })
})
