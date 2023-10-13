/**
 * @jest-environment jsdom
 */
import sizes from '@/sizes'
import byId from '@/byId'
import setStyles from '@/setStyles'
import innerHeight from '@/innerHeight'
import innerWidth from '@/innerWidth'
import outerHeight from '@/outerHeight'
import outerWidth from '@/outerWidth'

describe('sizes() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth')
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, writable: true, value: 30 })
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, writable: true, value: 30 })
  })

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth)
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
  })

  it('sizes() 不传递任何参数，返回：false', () => {
    expect(sizes()).toBe(false)
  })

  it('sizes($list) 获取尺寸信息，返回：false', () => {
    const rules = {
      margin: '5px',
      padding: '5px',
      border: '1px solid rgb(0, 0, 0)',
      width: '8px',
      height: '8px'
    }
    let props

    setStyles($list, rules)
    props = sizes($list)

    expect(props.offsetHeight).toEqual(30)
    expect(props.offsetWidth).toEqual(30)

    expect(props.innerHeight).toEqual(innerHeight($list))
    expect(props.innerWidth).toEqual(innerWidth($list))

    expect(props.outerHeight).toEqual(outerHeight($list))
    expect(props.outerWidth).toEqual(outerWidth($list))

    expect(props.margin).toEqual({top:5,right:5,bottom:5,left:5})
    expect(props.padding).toEqual({top:5,right:5,bottom:5,left:5})
    expect(props.border).toEqual({top:1,right:1,bottom:1,left:1})
  })
})
