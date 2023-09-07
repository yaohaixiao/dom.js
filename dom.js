import addClass from './addClass'
import after from './after'
import attr from './attr'
import before from './before'
import byId from './byId'
import children from './children'
import closest from './closest'
import createElement from './createElement'
import css from './css'
import getAttribute from './getAttribute'
import getAttributes from './getAttributes'
import getDocumentHeight from './getDocumentHeight'
import getDocumentScrollLeft from './getDocumentScrollLeft'
import getDocumentScrollTop from './getDocumentScrollTop'
import getDocumentWidth from './getDocumentWidth'
import getNextSibling from './getNextSibling'
import getNextSiblingBy from './getNextSiblingBy'
import getNextSiblings from './getNextSiblings'
import getOffset from './getOffset'
import getOffsetLeft from './getOffsetLeft'
import getOffsetTop from './getOffsetTop'
import getPageY from './getPageY'
import getPageX from './getPageX'
import getPageXY from './getPageXY'
import getHostOrParent from './getHostOrParent'
import getPreviousSibling from './getPreviousSibling'
import getPreviousSiblingBy from './getPreviousSiblingBy'
import getPreviousSiblings from './getPreviousSiblings'
import getScrollParent from './getScrollParent'
import getScrollTotalLeft from './getScrollTotalLeft'
import getScrollTotalTop from './getScrollTotalTop'
import getScrollTotalXY from './getScrollTotal'
import getScrollLeft from './getScrollLeft'
import getScrollTop from './getScrollTop'
import getScroll from './getScroll'
import getSiblings from './getSiblings'
import getStyle from './getStyle'
import getStyles from './getStyles'
import getViewportHeight from './getViewportHeight'
import getViewportWidth from './getViewportWidth'
import has from './contains'
import hasClass from './hasClass'
import html from './html'
import index from './index'
import insertAfter from './insertAfter'
import insertBefore from './insertBefore'
import insertHTMLAfter from './insertHTMLAfter'
import insertHTMLBefore from './insertHTMLBefore'
import isAncestor from './isAncestor'
import isMatched from './isMatched'
import matches from './matches'
import next from './next'
import nextAll from './nextAll'
import prev from './prev'
import prevAll from './prevAll'
import removeClass from './removeClass'
import replaceClass from './replaceClass'
import scrollTo from './scrollTo'
import setAttribute from './setAttribute'
import setAttributes from './setAttributes'
import setProperty from './setProperty'
import setStyle from './setStyle'
import setStyles from './setStyles'
import siblings from './siblings'
import toggle from './toggle'
import toggleClass from './toggleClass'

const DOM = {
  addClass,
  addStyles: setStyles,
  after,
  attr,
  before,
  byId,
  children,
  closest,
  createElement,
  css,
  getAttribute,
  getAttributes,
  getDocumentHeight,
  getDocumentScrollLeft,
  getDocumentScrollTop,
  getDocumentWidth,
  getNextSibling,
  getNextSiblingBy,
  getNextSiblings,
  getOffset,
  getOffsetLeft,
  getOffsetTop,
  getPageY,
  getPageX,
  getPageXY,
  getParentOrHost: getHostOrParent,
  getPreviousSibling,
  getPreviousSiblingBy,
  getPreviousSiblings,
  getScrollParent,
  getScrollTotalX: getScrollTotalLeft,
  getScrollTotalY: getScrollTotalTop,
  getScrollTotalXY,
  getScrollX: getScrollLeft,
  getScrollY: getScrollTop,
  getScrollXY: getScroll,
  getSiblings,
  getStyle,
  getViewportHeight,
  getViewportWidth,
  has,
  hasClass,
  html,
  index,
  insertAfter,
  insertBefore,
  insertHTMLAfter,
  insertHTMLBefore,
  isAncestor,
  isMatched,
  matches,
  next,
  nextAll,
  prev,
  prevAll,
  removeClass,
  replaceClass,
  scrollTo,
  setAttribute,
  setAttributes,
  setProperty,
  setStyle,
  siblings,
  toggle,
  toggleClass
}

export default DOM
