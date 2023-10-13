/**
 * @jest-environment jsdom
 */
import setValue from '@/setValue'
import val from '@/val'
import byId from '@/byId'

describe('setValue() 方法', () => {
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

  it(`setValue() 不传递参数，返回： false`, () => {
    expect(setValue()).toBe(false)
  })

  it(`setValue($user, 'Yaohaixiao') 设置 $user 的值, 然后 val($user) 获取 $user 的值，返回： 'Yaohaixiao'`, () => {
    setValue($user, 'Yaohaixiao')
    expect(val($user)).toEqual('Yaohaixiao')
  })

  it(`setValue($group, '建模') 设置 $group 的值, 然后 val($group) 获取 $group 的值，返回： '建模'`, () => {
    setValue($group, '建模')
    expect(val($group)).toEqual('建模')
  })

  it(`setValue($option, '成本') 设置 $group 的值, 然后 val($group) 获取 $group 的值，返回： '成本'`, () => {
    setValue($option, '成本')
    expect(val($group)).toEqual('成本')
  })

  it(`setValue($desc, '软件工程师') 设置 $desc 的值, 然后 val($desc) 获取 $desc 的值，返回： '软件工程师'`, () => {
    setValue($desc, '软件工程师')
    expect(val($desc)).toEqual('软件工程师')
  })
})
