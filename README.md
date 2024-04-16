# dom.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/dom.js)](https://www.npmjs.com/package/@yaohaixiao/dom.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/dom.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/dom.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/dom.js)](https://npmcharts.com/compare/@yaohaixiao/dom.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/dom.js.svg)](https://github.com/yaohaixiao/dom.js/blob/main/LICENSE)


dom.js - 专门处理 DOM 操作的 JavaScript 工具库。



## 项目初衷

dom.js 开发的目的是为初学 JavaScript 的朋友了解原生 JavaScript 中的 DOM 操作方法而写。源代码中 @see 属性给出了 MDN 中的 DOM API 接口的文档 URL 地址，希望初学的朋友们可以仔细阅读文档，了解其原理。从而能够摆脱对第三方框架的依赖，即使没有了框架，也能自如的通过 JavaScript 操作 DOM。

当然，dom.js 中提供的工具方法也是可以应用到实际的日常开发中的。



## Features

* 原生 JavaScript 纯手动打造，无任何依赖；
* 支持 UMD 和 ES6 模块规范，适应各种运行环境；
* 支持调用 DOM 整体模块和独立调用方法；
* 提供 100+ 实用的 DOM 操作方法，让你轻松应对日常开发的各种 DOM 应用场景；


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
// Node.js 16 开始也支持 ES6 模块了，可以直接在 Node 环境中使用
import DOM from '@yaohaixiao/dom.js/dom'

// 调用单独的子模块, 模块中包含的具体方法请参考 API 文档中的导航分类
import DOM from '@yaohaixiao/dom.js/attributes'
import DOM from '@yaohaixiao/dom.js/base'
import DOM from '@yaohaixiao/dom.js/color'
import DOM from '@yaohaixiao/dom.js/insertion'
import DOM from '@yaohaixiao/dom.js/position'
import DOM from '@yaohaixiao/dom.js/sibling'
import DOM from '@yaohaixiao/dom.js/size'
import DOM from '@yaohaixiao/dom.js/style'
import DOM from '@yaohaixiao/dom.js/types'

// 单独调用某个方法
import getEl from '@yaohaixiao/dom.js/getEl'


const $list = DOM.byId('#list')

getEl('#list')
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
  className: 'siblings',
  'data-index': index($nextSibling)
})

const $anchor = createElement('a', {
  className: 'anchor',
  href: 'https://github.com/yaohaixiao/dom.js',
  target: '_blank'
}, 'Fork on Github')
```


## API Documentation

API 文档地址：[https://yaohaixiao.github.io/dom.js/](https://yaohaixiao.github.io/dom.js/)



## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
