import Outline from '@yaohaixiao/outline.js/outline'
import observeResize from '../../observeResize'
import getViewportWidth from '../../getViewportWidth'

const defaults = Outline.DEFAULTS
let outline

defaults.parentElement = '#aside'
defaults.scrollElement = '#main'
defaults.articleElement = '#article'
defaults.selector = 'h2,h3'
defaults.title = false
defaults.showCode = false
defaults.position = 'sticky'
defaults.git = 'https://github.com/yaohaixiao/dom.js'
defaults.tags = 'https://github.com/yaohaixiao/dom.js/tags'
defaults.issues = 'https://github.com/yaohaixiao/dom.js/issues'
defaults.reader = {
  target: '#article',
  title: document.querySelector('.main__h1')
}
defaults.chapterTextFilter = (text) => {
  return text.replace(/\s*\(.*?\)/, '()')
}
defaults.customClass = 'aside-navigator'
defaults.afterScroll = (type) => {
  const viewportWidth = getViewportWidth()
  if (viewportWidth <= 500 && type === 'chapter') {
    outline.toggle()
  }
}
outline = new Outline(defaults)

observeResize(document.querySelector('#docs'), () => {
  const viewportWidth = getViewportWidth()
  if (viewportWidth <= 500 && outline.isExpanded()) {
    outline.toggle()
  }
})

export default outline
