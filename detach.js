import getEl from './getEl'
import clone from './clone'

/**
 * 移除元素：detach（）方法与 remove（）方法相同，不同之处在于 detach（）保留了与
 * 被删除元素关联的所有jQuery数据。当稍后要将删除的元素重新插入DOM时，此方法很有用。
 * ========================================================================
 * @method detach
 * @memberof DOM
 * @param {String} selector 选择器
 * @param {HTMLElement} [el] 容器元素
 * @return {Array}
 */
const detach = (selector, el) => {
  const children = [...getEl(selector, el, true)]
  // 创建一个新的元素，用于暂存原元素的事件和数据
  const cloned = children.map((child) => clone(child, true))

  // 移除原元素
  children.forEach((child) => {
    child.remove()
  })

  // 返回克隆元素
  return cloned
}

export default detach
