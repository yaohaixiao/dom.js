import Attributes from './attributes'
import Base from './base'
import Insertion from './insertion'
import Position from './position'
import Sibling from './sibling'
import Size from './size'
import Style from './style'
import Types from './types'

const DOM = {
  ...Attributes,
  ...Base,
  ...Insertion,
  ...Position,
  ...Sibling,
  ...Size,
  ...Style,
  ...Types
}

export default DOM
