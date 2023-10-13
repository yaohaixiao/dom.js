/**
 * @jest-environment jsdom
 */
import getNextSiblingBy from '@/getNextSiblingBy'
import byId from '@/byId'

describe('getNextSiblingBy() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-user">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#user" class="remove" data-id="user">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-exit">\n' +
    '    <span>退出</span>\n' +
    '    <a href="/sitemap#exit" class="remove" data-id="exit">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const $list = byId('#list')

  it('getNextSiblingBy() 不传递任何参数，返回：null', () => {
    expect(getNextSiblingBy()).toBeNull()
  })

  it('getNextSiblingBy($list) 没有下一个邻居节点，返回：null', () => {
    expect(getNextSiblingBy($list)).toBeNull()
  })

  it(`getNextSiblingBy($home, '.menu') 没有下一个邻居节点，返回：null`, () => {
    const $home = byId('#item-home')
    expect(getNextSiblingBy($home, '.menu')).toBeNull()
  })

  it(`getNextSiblingBy($home, '.faqs') 有下一个邻居节点，返回：邻居节点 $faqs（id="item-faqs"）`, () => {
    const $home = byId('#item-home')
    const $faqs = byId('#item-faqs')
    const $next = getNextSiblingBy($home, '.faqs')

    expect($next).toEqual($faqs)
    expect($next.id).toEqual('item-faqs')
  })
})
