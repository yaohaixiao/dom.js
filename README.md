# dom.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/dom.js)](https://www.npmjs.com/package/@yaohaixiao/dom.js)
![Gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/gh/yaohaixiao/dom.js/dom.min.js?compression=gzip&label=gzip%20size)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/dom.js/branch/master/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/dom.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/dom.js)](https://npmcharts.com/compare/@yaohaixiao/dom.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/dom.js.svg)](https://github.com/yaohaixiao/dom.js/blob/master/LICENSE)


dom.js - 专门处理 DOM 相关操作的 JavaScript 工具方法库。


## Browsers Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Opera |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edge                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   | last 10 versions                                                                                                                                                                                   | last 10 versions                                                                                                                                                                               |



## Install

dom.js 支持 UMD 规范和 ES6 的模块调用方式，既可以在 Node.js 环境中使用 npm 安装，也可以在浏览器中使用 script 标签引入到页面。

### npm install

```sh
# install from npmjs.com
npm i -S @yaohaixiao/dom.js

# install from github.com
npm i -S @yaohaixiao/dom.js --registry=https://npm.pkg.github.com
```

### script tag

在浏览器中调用 dom.js，可以选择调用 jsdelivr 提供的 CDN 服务中的文件，也可以使用本地的 dom.js 文件。

#### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/dom.js/dom.min.js"></script>
```

#### Local

```html
<script src="/path/to/dom.min.js"></script>
```

### UMD Module

```js
const DOM = require('@yaohaixiao/dom.js')

const $list = DOM.byId('#list')
```

### ES6 Module

```js
import DOM from '@yaohaixiao/dom.js/dom'

const $list = DOM.byId('#list')
```


## Usage

dom.js 提供完整功能函数的 dom 模块，也支持单独调用某个功能方法：

```js
import DOM from '@yaohaixiao/dom.js/dom'
import next from '@yaohaixiao/dom.js/next'
import index from '@yaohaixiao/dom.js/index'
import createElement from '@yaohaixiao/dom.js/createElement'

// 获取 id = ‘list’ 的列表
const $list = DOM.byId('#list')

// 获取 $list 列表的下一个邻居（元素）节点
const $nextSibling = next($list)

// 给 $nextSibling 设置属性
DOM.setAttributes($nextSibling, {
  id: 'list-next-sibling',
  className: 'sibling',
  'data-index': index($nextSibling)
})

const $anchor = createElement('a', {
  className: 'anchor',
  href: 'https://github.com/yaohaixiao/dom.js',
  target: '_blank'
}, 'Fork on Github')
```


## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
