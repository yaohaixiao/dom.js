/**
 * @jest-environment jsdom
 */
import prevBy from '@/prevBy'
import byId from '@/byId'

describe('prevBy() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item home" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-faqs">\n' +
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

  it('prevBy() 不传递任何参数，返回：null', () => {
    expect(prevBy()).toBeNull()
  })

  it('prevBy($list) 没有上一个邻居节点，返回：null', () => {
    expect(prevBy($list)).toBeNull()
  })

  it(`prevBy($faqs, '.home') 有上一个邻居节点，返回：邻居节点 $home（id="item-home"）`, () => {
    const $faqs = byId('#item-faqs')
    const $home = byId('#item-home')
    const $prev = prevBy($faqs, '.home')

    expect($prev).toEqual($home)
    expect($prev.id).toEqual('item-home')
  })
})
