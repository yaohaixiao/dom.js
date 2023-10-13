/**
 * @jest-environment jsdom
 */
import getValue from '@/getValue'
import byId from '@/byId'

describe('getValue() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<label for="user" class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />\n' +
    '<label for="group" class="label">部门：</label>' +
    '<select id="group" name="group" class="select">' +
    '<option value="全部">全部</option>' +
    '<option value="开发云" selected>开发云</option>' +
    '<option id="option" value="建模">建模</option>' +
    '<option value="售楼">售楼</option>' +
    '</select>\n' +
    '<label for="desc" class="label">备注：</label><textarea name="desc" id="desc">前端工程师</textarea>'

  const $user = byId('#user')
  const $group = byId('#group')
  const $option = byId('#option')
  const $desc = byId('#desc')

  it(`getValue() 不传递参数，返回： ''`, () => {
    expect(getValue()).toBe('')
  })

  it(`getValue($user) 获取 $user 的值，返回： 'Robert'`, () => {
    expect(getValue($user)).toEqual('Robert')
  })

  it(`getValue($group) 获取 $group 的值，返回： '开发云'`, () => {
    expect(getValue($group)).toEqual('开发云')
  })

  it(`getValue($option) 获取 $option 的值，返回： '建模'`, () => {
    expect(getValue($option)).toEqual('建模')
  })

  it(`getValue($desc) 获取 $desc 的值，返回： '前端工程师'`, () => {
    expect(getValue($desc)).toEqual('前端工程师')
  })
})
