/**
 * @jest-environment jsdom
 */
import getSiblings from '@/getSiblings'
import byId from '@/byId'

describe('getSiblings() 方法', () => {
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

  it('getSiblings() 不传递任何参数，返回：[]', () => {
    expect(getSiblings()).toEqual([])
  })

  it('getSiblings($list) 没有下一个邻居节点，返回：[]', () => {
    expect(getSiblings($list)).toEqual([])
  })

  it('getSiblings($home) 有下一个邻居节点，返回：邻居节点数组', () => {
    const $home = byId('#item-home')
    const $siblings = getSiblings($home)

    expect($siblings.length).toEqual(4)
  })

  it('getSiblings($home) 有下一个邻居节点，返回：邻居节点数组（包含自己）', () => {
    const $home = byId('#item-home')
    const $siblings = getSiblings($home, true)

    expect($siblings.length).toEqual(5)
  })
})
