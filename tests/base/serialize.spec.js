/**
 * @jest-environment jsdom
 */
import serialize from '@/serialize'
import byId from '@/byId'

describe('readonly() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<form name="form" id="form">\n' +
    '<input type="text" id="user" name="user" class="user" value="Robert" />\n' +
    '<input type="checkbox" id="reading" checked="checked" name="hobby" class="checkbox" value="reading" />读书\n' +
    '<textarea id="desc" name="desc" class="desc">I\'m a programmer</textarea>\n' +
    '</form>'

  const $form = byId('#form')
  const $user = byId('#user')

  it(`serialize() 不传递参数，返回：false`, () => {
    expect(serialize()).toBe(false)
  })

  it(`serialize($user) 传递参数非 form 表单元素，返回：false`, () => {
    expect(serialize($user)).toBe(false)
  })

  it(`serialize($form)，返回：$form 表单数据转化后的对象`, () => {
    const result = serialize($form)
    expect(result).toEqual({
      desc: "I'm a programmer",
      hobby: 'reading',
      user: 'Robert'
    })
  })

  it(`serialize($form, true)，返回：$form 表单数据转化后的字符串`, () => {
    const result = serialize($form, true)
    expect(result).toEqual('user=Robert&hobby=reading&desc=I%27m+a+programmer')
  })
})
