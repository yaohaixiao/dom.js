/**
 * @jest-environment jsdom
 */
import createElement from '@/createElement'
import getAttribute from '@/getAttribute'
import isText from '@/isText'
import hasClass from '@/hasClass'

describe('createElement() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const support = '  <li class="item item-support item-ok" id="item-support">\n' +
  '    <span>Support</span>\n' +
  '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
  '  </li>\n' +

  it(`createElement() 不传递参数，返回：null`, () => {
    expect(createElement()).toEqual(null)
  })

  it(`createElement('div') 不传递 attrs 和 children 参数，创建空白 div 节点：`, () => {
    const $div = createElement('div')

    expect($div.tagName.toLowerCase()).toEqual('div')
  })

  it(`createElement('div', { id: 'first', className: 'first' }) 传递 attrs（对象），创建节点，并添加 html 属性：`, () => {
    const $user = createElement('input', { className: 'input', type: 'text', name: 'user', value: 'robert' })

    expect($user.tagName.toLowerCase()).toEqual('input')
    expect(hasClass($user, 'input')).toBe(true)
    expect(getAttribute($user, 'name')).toEqual('user')
    expect(getAttribute($user, 'value')).toEqual('robert')

    const $div = createElement('div', { id: 'first', className: 'first' })

    expect($div.tagName.toLowerCase()).toEqual('div')
    expect(hasClass($div, 'first')).toBe(true)
    expect($div.id).toEqual('first')
  })

  it(`createElement('div', [$label, $user]) 传递 attrs（数组），创建节点，并添加子节点：`, () => {
    const $user = createElement('input', { id:'user', className: 'input', type: 'text', name: 'user', value: 'robert' })
    const $label = createElement('label', { htmlFor: 'user', className: 'label' })
    const $div = createElement('div', [$label, $user, 'str'])

    expect($div.tagName.toLowerCase()).toEqual('div')
    expect(hasClass($div.firstChild, 'label')).toBe(true)
  })

  it(`createElement('div', $label) 传递 attrs（DOM 节点），创建节点，并添加子节点：`, () => {
    const $label = createElement('label', { htmlFor: 'user', className: 'label' }, '用户名')
    const $div = createElement('div', $label)

    expect($label.innerHTML).toEqual('用户名')
    expect(getAttribute($label, 'htmlFor')).toEqual('user')
    expect($div.firstChild.tagName.toLowerCase()).toEqual('label')
  })

  it(`createElement('div', 'First') 传递 attrs（字符串），创建节点，并添加文本子节点：`, () => {
    const $div = createElement('div', 'First')

    expect($div.innerHTML).toEqual('First')
    expect(isText($div.firstChild)).toBe(true)
  })

  it(`createElement('div', { id: 'first', className: 'first' }, [$label, $user]) 传递 children（数组），创建节点，并添加子节点：`, () => {
    const $user = createElement('input', { id:'user', className: 'input', type: 'text', name: 'user', value: 'robert' })
    const $label = createElement('label', { htmlFor: 'user', className: 'label' })
    const $div = createElement('div', { id: 'first', className: 'first' }, [$label, $user, 'str'])

    expect($div.tagName.toLowerCase()).toEqual('div')
    expect(hasClass($div.firstChild, 'label')).toBe(true)
  })

  it(`createElement('div', { id: 'first', className: 'first' }, $label) 传递 children（节点），创建节点，并添加子节点：`, () => {
    const $label = createElement('label', { htmlFor: 'user', className: 'label' })
    const $div = createElement('div', { id: 'first', className: 'first' }, $label)

    expect($div.tagName.toLowerCase()).toEqual('div')
    expect(hasClass($div.firstChild, 'label')).toBe(true)
  })

  it(`createElement('div', { id: 'first', className: 'first' }, 'First') 传递 children（字符串），创建节点，并添加子节点：`, () => {
    const $div = createElement('div', { id: 'first', className: 'first' }, 'First')

    expect($div.tagName.toLowerCase()).toEqual('div')
    expect(isText($div.firstChild)).toBe(true)
  })
})
