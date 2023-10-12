/**
 * @jest-environment jsdom
 */
import getColor from '@/getColor'
import setStyle from '@/setStyle'
import byId from '@/byId'

describe('getColor() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const BLACK = '#000'
  const WHITE = 'white'
  const $list = byId('#list')

  it('getColor() 不传递参数，返回：false', () => {
    expect(getColor()).toBe(false)
  })

  it(`setStyle($list, 'background-color', ${WHITE})，设置背景色，再通过 getColor($list, 'background-color', false) 获取 RGB 格式色值，返回：'rgb(255, 255, 255)'`, () => {
    setStyle($list, 'background-color', WHITE)

    expect(getColor($list, 'background-color', false)).toEqual('rgb(255, 255, 255)')
  })

  it(`getColor($list, 'color') 获取未设置的值，返回：'transparent'`, () => {
    expect(getColor($list, 'color')).toEqual('transparent')
  })

  it(`setStyle($list, 'color', ${BLACK})，设置文字颜色，再通过 getColor($list, 'color') 获取 16 机制格式色值，返回：'#000000'`, () => {
    setStyle($list, 'color', BLACK)

    expect(getColor($list, 'color')).toEqual('#000000')
  })
})
