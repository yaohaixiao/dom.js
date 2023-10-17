/**
 * @jest-environment jsdom
 */
import wrapInner from '@/wrapInner'
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
    '<div class="wrapper"></div>\n' +
    '<div class="inner-wrap"></div>'

  const $list = byId('#list')

  it(`wrapInner() 不传递参数，返回： false`, () => {
    expect(wrapInner()).toBe(false)
  })

  it(`wrapInner($items, 24) 传递非法参数，返回： false`, () => {
    const $items = byClass('.item', $list)

    expect(wrapInner($items, 24)).toBe(false)
  })

  it(`wrapInner($items, '<div class="wrap"></div>') 无法查询到 $items 匹配的 NodeList，返回： false`, () => {
    const $items = byClass('.menu', $list)

    expect(wrapInner($items, '<div class="wrap"></div>')).toBe(false)
  })

  it(`wrapInner($items, '<div class="wrap"></div>') 传递非法参数，返回： false`, () => {
    let $items = byClass('.item', $list)
    let $wraps

    wrapInner($items, '<div class="wrap"></div>')
    $wraps = byClass('.wrap', $list)

    expect($wraps.length).toEqual(3)
    expect($wraps[0].parentNode.id).toEqual('item-home')
  })

  it(`wrapInner($items, '.wrapper') wrapElement 参数为 DOM 元素选择器，返回： false`, () => {
    let $items = byClass('.item', $list)
    let $wrappers

    wrapInner($items, '.wrapper')
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].parentNode.id).toEqual('item-home')
  })

  it(`wrapInner($items, getEl('.wrapper')) wrapElement 参数为 DOM 元素，$items 使用 .wrapper DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML = '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
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

    wrapInner($items, getEl('.wrapper'))
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].parentNode.id).toEqual('item-home')
  })

  it(`wrapInner($items, getEl('.wrapper')) wrapElement 参数为 DOM 元素，$items 使用 wrapElement 指定的 DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML = '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
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

    wrapInner($items, getEl('.wrapper'))
    $wrappers = byClass('.wrapper', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].parentNode.id).toEqual('item-home')
  })

  it(`wrapInner($items, () => getEl('.inner-wrap')) wrapElement 参数为 Function，$items 使用 wrapElement 返回的 DOM 元素的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML = '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
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
      '  </li>'

    let $items = byClass('.item', $list)

    wrapInner($items, () => getEl('.inner-wrap'))
    $wrappers = byClass('.inner-wrap', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].parentNode.id).toEqual('item-home')
  })

  it(`wrapInner($items, () => {return '<div class="wrapper2"></div>'}) wrapElement 参数为 Function，$items 使用 wrapElement 返回的 HTML 代码包裹：`, () => {
    let $wrappers

    $list.innerHTML = '  <li class="item item-home" data-id="item-home" id="item-home">\n' +
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

    wrapInner($items, () => {return '<div class="wrapper2"></div>'})
    $wrappers = byClass('.wrapper2', $list)

    expect($wrappers.length).toEqual(3)
    expect($wrappers[0].parentNode.id).toEqual('item-home')
  })
})
