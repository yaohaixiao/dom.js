## [0.1.4](https://github.com/yaohaixiao/dom.js/compare/0.1.3...0.1.4) (2023-10-08)


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
