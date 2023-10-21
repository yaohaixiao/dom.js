/**
 * @jest-environment jsdom
 */
import readonly from '@/readonly'
import getAttribute from '@/getAttribute'
import byId from '@/byId'

describe('readonly() 方法', () => {
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
  const $reading = byId('#reading')
  const $desc = byId('#desc')

  it(`readonly() 不传递参数，返回：false`, () => {
    expect(readonly()).toBe(false)
  })

  it(`readonly($list) 非 input 或者 textarea 元素，返回：false`, () => {
    expect(readonly($list)).toBe(false)
  })

  it(`readonly($reading) 将 $reading (input)元素 type = "check" 无法设置为只读，getAttribute($user, 'readonly')，返回：false`, () => {
    expect(readonly($reading)).toBe(false)
  })

  it(`readonly($user) 将 $user (input)元素设置为只读，getAttribute($user, 'readonly')，返回：'true'`, () => {
    readonly($user)

    expect(getAttribute($user, 'readonly')).toBe('true')
  })

  it(`readonly($desc) 将 $desc (textarea)元素设置为只读，getAttribute($desc, 'readonly')，返回：'true'`, () => {
    readonly($desc)

    expect(getAttribute($desc, 'readonly')).toBe('true')
  })

  it(`$desc 为只读，readonly($desc) 取消只读，getAttribute($desc, 'readonly')，返回：null`, () => {
    readonly($desc)

    expect(getAttribute($desc, 'readonly')).toBeNull()
  })
})
