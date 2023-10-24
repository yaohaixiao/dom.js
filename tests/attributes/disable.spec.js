/**
 * @jest-environment jsdom
 */
import disable from '@/disable'
import enable from '@/enable'
import byId from '@/byId'
import getAttribute from '@/getAttribute'
import setAttribute from '@/setAttribute'

describe('disable() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '<input type="text" id="user" class="user" value="Robert" />\n' +
    '<input type="checkbox" id="reading" name="hobby" class="checkbox" value="reading" />读书\n' +
    '<textarea id="desc" class="desc">I\'m a programmer</textarea>'


  const $list = byId('#list')
  const $user = byId('#user')
  const $desc = byId('#desc')

  it(`disable() 不传递参数，返回：false`, () => {
    expect(disable()).toBe(false)
  })

  it(`disable($list) 非 input 或者 textarea 元素，返回：false`, () => {
    expect(disable($list)).toBe(false)
  })

  it(`setAttribute($user, 'disabled', true) 将 $user (input)元素为禁用，在使用 disable($user) 设置禁用，返回：false`, () => {
    setAttribute($user, 'disabled', true)
    expect(disable($user)).toBe(false)
  })

  it(`enable($desc) 先启用 $desc，在 disable($desc), 然后 getAttribute($desc, 'disabled')，返回：'true'`, () => {
    enable($desc)
    disable($desc)

    expect(getAttribute($desc, 'disabled')).toEqual('true')
  })
})
