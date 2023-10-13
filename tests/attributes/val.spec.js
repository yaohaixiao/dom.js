/**
 * @jest-environment jsdom
 */
import val from '@/val'
import byId from '@/byId'

describe('val() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<label for="user" class="label">用户名：</label><input type="text" name="user" id="user" value="Robert" />\n' +
    '<label for="group" class="label">部门：</label>' +
    '<select id="group" name="group" class="select">' +
    '<option value="全部">全部</option>' +
    '<option value="开发云">开发云</option>' +
    '<option value="建模">建模</option>' +
    '<option value="售楼">售楼</option>' +
    '</select>\n' +
    '<label for="desc" class="label">备注：</label><textarea name="desc" id="desc">前端工程师</textarea>'

  const $user = byId('#user')

  it(`val() 不传递参数，返回： ''`, () => {
    expect(val()).toBe('')
  })

  it(`val($user) 获取 $user 的值，返回： 'Robert'`, () => {
    expect(val($user)).toEqual('Robert')
  })

  it(`val($user, 'Yaohaixiao') 设置 $user 的值，然后用 val($user) 获取 $user 的值，返回： 'Yaohaixiao'`, () => {
    val($user, 'Yaohaixiao')
    expect(val($user)).toEqual('Yaohaixiao')
  })
})
