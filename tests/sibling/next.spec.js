/**
 * @jest-environment jsdom
 */
import next from '@/next'
import byId from '@/byId'

describe('next() 方法', () => {
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

  it('next() 不传递任何参数，返回：null', () => {
    expect(next()).toBeNull()
  })

  it('next($list) 没有下一个邻居节点，返回：null', () => {
    expect(next($list)).toBeNull()
  })

  it('next($home) 有下一个邻居节点，返回：邻居节点 $support（id="item-support"）', () => {
    const $home = byId('#item-home')
    const $support = byId('#item-support')
    const $next = next($home)

    expect($next).toEqual($support)
    expect($next.id).toEqual('item-support')
  })
})
