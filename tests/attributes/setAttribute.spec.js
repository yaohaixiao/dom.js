/**
 * @jest-environment jsdom
 */
import setAttribute from '@/setAttribute'
import getAttribute from '@/getAttribute'
import byId from '@/byId'
import getEl from '@/getEl'

describe('setAttribute() 方法', () => {
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
    '</ul>\n' +
    '<label class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />\n' +
    '<label class="label">说明：</label><textarea type="text" name="desc" id="desc" value="Author of dom.js"></textarea>'

  it(`setAttribute() 不传递 el 参数，返回： false`, () => {
    expect(setAttribute()).toBe(false)
  })

  it(`setAttribute($home, 'data-id', 'item-home')，然后 getAttribute($home, 'data-id') ，返回： 'item-home'`, () => {
    const $home = byId('#item-home')

    setAttribute($home, 'data-id', 'item-home')

    expect(getAttribute($home, 'data-id')).toEqual('item-home')
  })

  it(`setAttribute($text, 'className', 'item-text')，然后 getAttribute($text, 'className')，返回： 'item-text'`, () => {
    const $text = getEl('#item-home > span')

    setAttribute($text, 'className', 'item-text')

    expect(getAttribute($text, 'className')).toEqual('item-text')
  })

  it(`setAttribute($label, 'htmlFor', 'user')，然后 getAttribute($label, 'htmlFor')，返回： 'user'`, () => {
    const $label = getEl('.label')

    setAttribute($label, 'htmlFor', 'user')

    expect(getAttribute($label, 'htmlFor')).toEqual('user')
  })

  it(`setAttribute($label, 'style', 'font-size: 12px')，然后 getAttribute($label, 'style')，返回： 'font-size: 12px;'`, () => {
    const $label = getEl('.label')

    setAttribute($label, 'style', 'font-size: 12px')
    expect(getAttribute($label, 'style')).toEqual('font-size: 12px;')
  })


  it(`setAttribute($user, 'value', 'Yaohaixiao')，然后 getAttribute($user, 'value')，返回： 'Yaohaixiao'`, () => {
    const $user = byId('#user')
    const $home = getEl('.item-home')

    setAttribute($user, 'value', 'Yaohaixiao')
    expect(getAttribute($user, 'value')).toEqual('Yaohaixiao')

    setAttribute($home, 'value', 'Yaohaixiao')
    expect(getAttribute($home, 'value')).toBe('Yaohaixiao')
  })

  it(`setAttribute($desc, 'value', 'He is a web developer')，然后 getAttribute($desc, 'value')，返回： 'He is a web developer'`, () => {
    const $desc = byId('#desc')

    setAttribute($desc, 'value', 'He is a web developer')
    expect(getAttribute($desc, 'value')).toEqual('He is a web developer')

    setAttribute($desc, 'data-id', 'textarea')
    expect(getAttribute($desc, 'data-id')).toEqual('textarea')
  })
})
