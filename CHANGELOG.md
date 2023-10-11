# [0.4.0](https://github.com/yaohaixiao/dom.js/compare/0.3.0...0.4.0) (2023-10-11)


### Bug Fixes

* 修复 outerHeight() 和 outerWidth() 方法中设置尺寸包括 margin 的计算逻辑错误的问题； ([dfa1b0a](https://github.com/yaohaixiao/dom.js/commit/dfa1b0ae9a913f95e11d10e2f21828218d3c361e))


### Features

* 添加 find() 和 findAll() 方法； ([49dd8b3](https://github.com/yaohaixiao/dom.js/commit/49dd8b35eb034b6d3da4fde320028b2f9e33fb12))
* 添加 getColor() 方法; ([538ffd2](https://github.com/yaohaixiao/dom.js/commit/538ffd2a1cb872b6107ccc293dcb1a50450f55be))
* 添加 toHex() 方法和 toRGB() 方法；添加 color 子模块； ([b37fb5d](https://github.com/yaohaixiao/dom.js/commit/b37fb5d0badc2a883c170005eb946e242d7f979a))



# [0.4.0](https://github.com/yaohaixiao/dom.js/compare/0.3.0...0.4.0) (2023-10-11)


### Bug Fixes

* 修复 outerHeight() 和 outerWidth() 方法中设置尺寸包括 margin 的计算逻辑错误的问题； ([dfa1b0a](https://github.com/yaohaixiao/dom.js/commit/dfa1b0ae9a913f95e11d10e2f21828218d3c361e))


### Features

* 添加 find() 和 findAll() 方法； ([49dd8b3](https://github.com/yaohaixiao/dom.js/commit/49dd8b35eb034b6d3da4fde320028b2f9e33fb12))
* 添加 toHex() 方法和 toRGB() 方法；添加 color 子模块； ([b37fb5d](https://github.com/yaohaixiao/dom.js/commit/b37fb5d0badc2a883c170005eb946e242d7f979a))



# [0.3.0](https://github.com/yaohaixiao/dom.js/compare/0.2.0...0.3.0) (2023-10-10)


### Bug Fixes

* 修复 getOffsetTop() 和 offsetLeft() 传递非 DOM 元素参数报错的问题； ([69a0eba](https://github.com/yaohaixiao/dom.js/commit/69a0eba20e84b8b5e052c8132685edf58670c5a4))
* 修复 insertAfter() 方法，el 参数为非 HTMLElement 无法插入的问题； ([4acfb96](https://github.com/yaohaixiao/dom.js/commit/4acfb969d2a5f61e758ae0ad8abf7441528d3c15))


### Features

* 调整 insertion 模块中 prepend()、append()、insertHTMLAfterBegin()、insertHTMLAfterEnd()、insertHTMLBeforeBegin() 和 insertHTMLBeforeEnd() 方法的 API，返回追加的 DOM 元素； ([a35e162](https://github.com/yaohaixiao/dom.js/commit/a35e162868357f132412e26f152b50085a8f7c1a))



# [0.2.0](https://github.com/yaohaixiao/dom.js/compare/0.1.5...0.2.0) (2023-10-09)


### Bug Fixes

* 修复 attrs() 方法无法设置多个属性的问题； ([0daa753](https://github.com/yaohaixiao/dom.js/commit/0daa7532f2201ef658bf75635ccb3eb697c62962))


### Features

* 调整 attrs()、contains()、createElement()、html()、isMatched() 和 text() 方法的异常数据判断逻辑，重新生成代码； ([c2c34dd](https://github.com/yaohaixiao/dom.js/commit/c2c34dd0e4e731e8f6f570f1efdbfb21e31fff11))
* 将 isInBounding() 调整为 inBounding()，将 isInViewport() 调整为 inViewport()，并调整 API 文档；添加 Position 子模楷中的方法的单测代码； ([a02b859](https://github.com/yaohaixiao/dom.js/commit/a02b8590c0e964956ddf3e5cb382fdf97ce12de3))



## [0.1.5](https://github.com/yaohaixiao/dom.js/compare/0.1.3...0.1.4) (2023-10-08)


### Bug Fixes

* 修复 children() 方法获取子节点错误问题； ([4f910ba](https://github.com/yaohaixiao/dom.js/commit/4f910ba1fb8594f076ce833ad9f126a32517356d))



## [0.1.3](https://github.com/yaohaixiao/dom.js/compare/0.1.2...0.1.3) (2023-09-28)


### Bug Fixes

* 修复 getPreviousSiblings() 和 getNextSiblings() 方法中会收集 null 的问题；逐步添加 base 模块中相关方法的单测代码 ([988b336](https://github.com/yaohaixiao/dom.js/commit/988b336c07f7fb360f0a6e02339c196e7c982e05))
* 修复 inDocument() 和 html() 发中导致错误的问题；继续添加单测代码； ([fb06571](https://github.com/yaohaixiao/dom.js/commit/fb065718534e5b3e0e858e8d71b0e3005aad4f42))


### Features

* 调整 getScroll()、 getScrollLeft()、 getScrollTop() 方法； ([415b525](https://github.com/yaohaixiao/dom.js/commit/415b52507de04d44980243aa9344a7e557da1255))



## [0.1.2](https://github.com/yaohaixiao/dom.js/compare/0.1.1...0.1.2) (2023-09-26)


### Bug Fixes

* 逐步添加单测代码；调整 createElement() 方法，修复 attrs 参数为字符串和 DOM 时的逻辑错误； ([0b73f5a](https://github.com/yaohaixiao/dom.js/commit/0b73f5adda3d1109de57b677d8b79aa3a189f80e))



## [0.1.1](https://github.com/yaohaixiao/dom.js/compare/0.1.0...0.1.1) (2023-09-23)


### Bug Fixes

* 修复 toggleClass() 等方法不传递 className 参数报错的问题；进一步完善单测，添加 getEl()、byClass()、removeClass() 和 toggleClass() 方法的单测代码； ([322c310](https://github.com/yaohaixiao/dom.js/commit/322c310601ab04edc6421eae09f6ec678f42134a))



# 0.1.0 (2023-09-22)

dom.js - 专门处理 DOM 操作的 JavaScript 工具库。



## 项目初衷

dom.js 开发的目的是为初学 JavaScript 的朋友了解原生 JavaScript 中的 DOM 操作方法而写。源代码中 @see 属性给出了 MDN 中的 DOM API 接口的文档 URL 地址，希望初学的朋友们可以仔细阅读文档，了解其原理。从而能够摆脱对第三方框架的依赖，即使没有了框架，也能自如的通过 JavaScript 操作 DOM。当然，dom.js 中提供的工具方法也是可以应用到实际的日常开发中的。



## Features

* 原生 JavaScript 纯手动打造，无任何依赖；
* 支持 UMD 和 ES6 模块规范，适应各种运行环境；
* 支持调用 DOM 整体模块和独立调用方法；
* 提供 90+ 使用的 DOM 操作方法，让你轻松应对日常开发的各种 DOM 应用场景；


## Browsers Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/dom.js/)</br>Opera |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Edge                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   | last 10 versions                                                                                                                                                                                   | last 10 versions                                                                                                                                                                               |
