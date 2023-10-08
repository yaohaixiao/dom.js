/**
 * @jest-environment jsdom
 */
import removeAttribute from '@/removeAttribute'
import getAttribute from '@/getAttribute'
import byId from '@/byId'
import getEl from '@/getEl'

describe('removeAttribute() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" value="item-home" id="item-home">\n' +
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
    '<label for="user" class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />\n' +
    '<label for="desc" class="label">用户名：</label><textarea type="text" name="desc" id="desc" value="auhtor of dom.js"></textarea>'

  it(`removeAttribute() 不传递参数，返回： false`, () => {
    expect(removeAttribute()).toBe(false)
  })

  it(`removeAttribute($list, 'className')，然后 getAttribute($list, 'className')，返回： null`, () => {
    const $list = byId('#list')

    expect(getAttribute($list, 'className')).toEqual('list')

    removeAttribute($list, 'className')
    expect(getAttribute($list, 'className')).toBe(null)
  })

  it(`removeAttribute($label, 'htmlFor')，然后 getAttribute($label, 'htmlFor')，返回： null`, () => {
    const $label = getEl('.label')

    expect(getAttribute($label, 'htmlFor')).toEqual('user')

    removeAttribute($label, 'htmlFor')
    expect(getAttribute($label, 'htmlFor')).toBe(null)
  })

  it(`removeAttribute($user, 'value')，然后 getAttribute($user, 'value')，返回： ''`, () => {
    const $user = byId('#user')
    const $home = byId('#item-home')

    expect(getAttribute($user, 'value')).toEqual('Robert')

    removeAttribute($user, 'value')
    expect(getAttribute($user, 'value')).toBe('')

    expect(getAttribute($home, 'value')).toEqual('item-home')

    removeAttribute($home, 'value')
    expect(getAttribute($home, 'value')).toBe(null)
  })

  it(`removeAttribute($list, 'id')，然后 getAttribute($list, 'id')，返回： null`, () => {
    const $list = byId('#list')

    expect(getAttribute($list, 'id')).toEqual('list')

    removeAttribute($list, 'id')
    expect(getAttribute($list, 'id')).toBe(null)
  })
})
