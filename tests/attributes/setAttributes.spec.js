/**
 * @jest-environment jsdom
 */
import setAttributes from '@/setAttributes'
import getAttribute from '@/getAttribute'
import byId from '@/byId'
import getEl from '@/getEl'

describe('setAttributes() 方法', () => {
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

  it(`setAttributes() 不传参数，返回： false`, () => {
    expect(setAttributes()).toBe(false)
  })

  it(`setAttributes($label, 'for="user"') 参数 props 不是 Object 类型，返回： false`, () => {
    const $label = getEl('.label')

    setAttributes($label, 'for="user"')
    expect(setAttributes()).toBe(false)
  })

  it(`setAttributes($label, {'htmlFor': 'user'})，然后 getAttribute($label, 'htmlFor') ，返回： 'user'`, () => {
    const $label = getEl('.label')

    setAttributes($label, {
      htmlFor: 'user'
    })

    expect(getAttribute($label, 'htmlFor')).toEqual('user')
  })
})
