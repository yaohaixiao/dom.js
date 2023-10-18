/**
 * @jest-environment jsdom
 */
import wrap from '@/wrap'
import byId from '@/byId'
import byClass from '@/byClass'
import getEl from '@/getEl'

describe('wrap() 方法', () => {
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
    '<div class="wrapper"></div>'

  const $list = byId('#list')

  it(`wrap() 不传递参数，返回： false`, () => {
    expect(wrap()).toBe(false)
  })

  it(`wrap($items, 24) 传递非法参数，返回： false`, () => {
    const $items = byClass('.item', $list)

    expect(wrap($items, 24)).toBe(false)
  })

  it(`wrap($items, '<div class="wrap"></div>') 无法查询到 $items 匹配的 NodeList，返回： false`, () => {
    const $items = byClass('.menu', $list)

    expect(wrap($items, '<div class="wrap"></div>')).toBe(false)
  })

  it(`wrap($items, '<div class="wrap"></div>') 传递非法参数，返回： false`, () => {
    let $items = byClass('.item', $list)
    let $wraps

    wrap($items, '<div class="wrap"></div>')
    $wraps = byClass('.wrap', $list)

    expect($wraps.length).toEqual(3)
    expect($wraps[0].firstElementChild.id).toEqual('item-home')
  })

  it(`wrap($items, '.wrapper') wrapElement 参数为 DOM 元素选择器，返回： false`, () => {
    let $items = byClass('.item', $list)
    let $wrappers

    wrap($items, '.wrapper')
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].firstElementChild.id).toEqual('item-home')
    expect($wrappers[0].parentNode.className).toEqual('wrap')
  })

  it(`wrap($items, getEl('.wrapper')) wrapElement 参数为 DOM 元素，$items 使用 .wrapper DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML =
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
      '  </li>\n'

    let $items = byClass('.item', $list)

    wrap($items, getEl('.wrapper'))
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].firstElementChild.id).toEqual('item-home')
  })

  it(`wrap($items, getEl('.wrapper')) wrapElement 参数为 DOM 元素，$items 使用 wrapElement 指定的 DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML =
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
      '  </li>\n'

    let $items = byClass('.item', $list)

    wrap($items, getEl('.wrapper'))
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].firstElementChild.id).toEqual('item-home')
  })

  it(`wrap($items, () => getEl('.wrapper')) wrapElement 参数为 Function，$items 使用 wrapElement 返回的 DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML =
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
      '  </li>\n'

    let $items = byClass('.item', $list)

    wrap($items, () => getEl('.wrapper'))
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].firstElementChild.id).toEqual('item-home')
  })

  it(`wrap($items, () => '<div class="wrapper"></div>') wrapElement 参数为 Function，$items 使用 wrapElement 返回的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML =
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
      '  </li>\n'

    let $items = byClass('.item', $list)

    wrap($items, () => '<div class="wrapper"></div>')
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].firstElementChild.id).toEqual('item-home')
  })
})
