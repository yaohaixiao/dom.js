import Attributes from './attributes'
import Base from './base'
import Color from './color'
import Detect from './detect'
import DOMRect from './rect'
import Insertion from './insertion'
import Observer from './observer'
import Platform from './platform'
import Position from './position'
import Resources from './resources'
import Sibling from './sibling'
import Size from './size'
import Style from './style'
import Others from './others'

const DOM = {
  ...Attributes,
  ...Base,
  ...Color,
  ...Detect,
  ...DOMRect,
  ...Insertion,
  ...Observer,
  ...Platform,
  ...Position,
  ...Resources,
  ...Sibling,
  ...Size,
  ...Style,
  ...Others
}

export default DOM
