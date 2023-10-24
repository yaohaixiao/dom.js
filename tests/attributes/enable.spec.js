/**
 * @jest-environment jsdom
 */
import enable from '@/enable'
import disable from '@/disable'
import byId from '@/byId'
import getAttribute from '@/getAttribute'

describe('enable() 方法', () => {
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

  it(`enable() 不传递参数，返回：false`, () => {
    expect(enable()).toBe(false)
  })

  it(`enable($list) 非 input 或者 textarea 元素，返回：false`, () => {
    expect(enable($list)).toBe(false)
  })

  it(`将 $user (input)元素为启用，在使用 enable($user) 设置启用，返回：false`, () => {
    expect(enable($user)).toBe(false)
  })

  it(`disable($desc) 先禁用 $desc，在 enable($desc), 然后 getAttribute($desc, 'disabled')，返回：null`, () => {
    disable($desc)
    enable($desc)

    expect(getAttribute($desc, 'disabled')).toBeNull()
  })
})
