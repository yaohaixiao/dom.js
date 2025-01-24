# [1.12.0](https://github.com/yaohaixiao/dom.js/compare/1.11.0...1.12.0) (2024-07-22)


### Features

* 添加 detach()、first() 和 last() 3个新方法；

### Bug Fixes

* 修复 replace() 方法的 replacement 参数输传 HTML 字符串时，会替换2个重复的内容的问题； 



# [1.11.0](https://github.com/yaohaixiao/dom.js/compare/1.10.0...1.11.0) (2024-07-22)


### Features

* 添加 typescript 支持，生成所有方法的 .d.ts 文件；([a54d3fc](https://github.com/yaohaixiao/dom.js/commit/a54d3fc4e79f0e1f76acf87e78ac483edf29837d))

### Bug Fixes

* 修复 getStyles() 方法传输传 attrs = [] 的输出结果不正确的问题； ([a54d3fc](https://github.com/yaohaixiao/dom.js/commit/a54d3fc4e79f0e1f76acf87e78ac483edf29837d))



# [1.10.0](https://github.com/yaohaixiao/dom.js/compare/1.9.0...1.10.0) (2024-05-15)


### Features

* 调整获取邻居节点剩余的别名方法的代码逻辑，el 参数支持文本节点类型 ([7a95222](https://github.com/yaohaixiao/dom.js/commit/7a952225a88a492b21d0c0b299e4de8b2c63db87))
* 调整邻居节点查询相关的所有方法，el 参数支持文本节点类型（以前仅查询邻居节点中的 HTMLElement 节点）； ([2893525](https://github.com/yaohaixiao/dom.js/commit/289352559b4c73a18f3d74656a3739046c4d788b))
* 添加 getChildren() 方法，调整 getChildrenBy() 方法逻辑 ([537fed2](https://github.com/yaohaixiao/dom.js/commit/537fed2a4f3e1d933785830034ee263b8cff4913))
* 添加新方法：getAncestorBy()、getAncestorByClassName()、getAncestorByTagName()、getChildrenBy()、getFirstChild()、 getFirstChildBy()、getLastChild() 和 getLastChildBy() ([c5969ec](https://github.com/yaohaixiao/dom.js/commit/c5969ece8b2934f0cb7c83ee4c985f08523e33d8))



# [1.9.0](https://github.com/yaohaixiao/dom.js/compare/1.8.0...1.9.0) (2024-04-30)


### Features

* 添加 getContainingBlock() getNodeName() getTagName() isContainingBlock() 和 isScaled() 方法 ([3f49592](https://github.com/yaohaixiao/dom.js/commit/3f49592a6db19b7afedba542294497df68110bd2))



# [1.8.0](https://github.com/yaohaixiao/dom.js/compare/1.7.0...1.8.0) (2024-04-25)


### Bug Fixes

* 修复 observeIntersections() 方法中 thresholds 参数名传递错误的问题 ([1dbc3b4](https://github.com/yaohaixiao/dom.js/commit/1dbc3b4a4bbe60cfa1b24283944bc512cd45320c))


### Features

* 调整 isWindow() 方法的判断逻辑 ([ee76884](https://github.com/yaohaixiao/dom.js/commit/ee76884f27123ae49e44ab1f4c54a3845e728900))
* 添加 getDocumentRect() 和 getViewportRect() 方法； ([09331e4](https://github.com/yaohaixiao/dom.js/commit/09331e44fe8cbb5e9a3208b5d806386eb1ea433a))
* 添加 observeResize() 方法 ([6630981](https://github.com/yaohaixiao/dom.js/commit/6630981daed259af01da3c623c6a595fa28f1da6))



# [1.7.0](https://github.com/yaohaixiao/dom.js/compare/1.6.0...1.7.0) (2024-04-16)


### Features

* 添加 dnsPrefetch()、prefetch() 和 preload() 方法； ([1fa7b8a](https://github.com/yaohaixiao/dom.js/commit/1fa7b8adf851cbd7a0afe3f47df1a389c7dd2b34))
* 添加 getActiveElement() redirect() randomHexColor() observeIntersections() observeMutations() 和 onClickOutside() 方法 ([9a8d847](https://github.com/yaohaixiao/dom.js/commit/9a8d8472e02d3b59f5e1830ceabef699bada37e5))
* 添加 loadCSS() 和 loadScript() 方法； ([719a4f0](https://github.com/yaohaixiao/dom.js/commit/719a4f01fa07adf99e0dbe219514d6e2221b3108))
* 添加 parents() 和 fragment() 方法； ([a989243](https://github.com/yaohaixiao/dom.js/commit/a989243255e346ac34e58f0585ee04f463e98f68))



# [1.6.0](https://github.com/yaohaixiao/dom.js/compare/1.5.1...1.6.0) (2024-02-26)


### Features

* 添加新方法：fullscreen()、getDocument()、getImages()、getWindow()、isWindow()、isNode()、isShadowRoot() ([9ef225d](https://github.com/yaohaixiao/dom.js/commit/9ef225d277f0afc818685d4590eeb72e09b742c4))



## [1.5.1](https://github.com/yaohaixiao/dom.js/compare/1.5.0...1.5.1) (2023-12-07)


### Bug Fixes

* 修复 Opera 浏览器信息检测错误的问题 ([2c75933](https://github.com/yaohaixiao/dom.js/commit/2c75933b72103b295d606f9e9654de1a6f135455))



# [1.5.0](https://github.com/yaohaixiao/dom.js/compare/1.4.0...1.5.0) (2023-12-06)


### Features

* 调整setAttribute()方法，添加直接设置innerText和innerHTML属性；
* 添加 platform 子模块，提供检测运行平台相关的功能函数；
* 更新 API 文档； ([2a1f5d6](https://github.com/yaohaixiao/dom.js/commit/2a1f5d659af1e4ee94aa5cad856a3a46dfe2d37d))



# [1.4.0](https://github.com/yaohaixiao/dom.js/compare/1.3.1...1.4.0) (2023-12-05)


### Bug Fixes

* 修复 _getURLPattern() 方法中关于 address 部分正则表达式错误的问题 ([3633cb8](https://github.com/yaohaixiao/dom.js/commit/3633cb8940285f9411251a05956fa11120387363))
* 修复 HSL 格式转 hex 的错误 ([0fc933c](https://github.com/yaohaixiao/dom.js/commit/0fc933c35aa9d1fc281850c17a0ad8f857240395))


### Features

* 添加 getScreenHeight() 和 getScreenWidth() 方法； ([7991fd8](https://github.com/yaohaixiao/dom.js/commit/7991fd80b0728af9e9b9f5ca58ca39475c492d62))
* 添加 getURLProps() getURLSearchParams() getURLSearchParamByName() 和 toURLSearchParams() 方法，并使用 toURLSearchParams() 方法替换 serialize() 方法中转化成搜素字符串的处理逻辑 ([2cd1a5d](https://github.com/yaohaixiao/dom.js/commit/2cd1a5d5492ce0852d229a929d3cb5189bddc56a))
* 添加 injectCSS() 方法，并添加相应的 API 文档； ([c24463c](https://github.com/yaohaixiao/dom.js/commit/c24463cab5001b9ae98a3fac08cf333cb462b958))
* 添加 toPixels() 和 toREM() 方法 ([0632e64](https://github.com/yaohaixiao/dom.js/commit/0632e645f4b8deaf13f583845d2db6cc4545c06f))
* 添加方法：copyToClipboard()、createAndDownloadFile()、isBrowser()、openURL() 等方法，并更新相应的 API 文档； ([c1d2350](https://github.com/yaohaixiao/dom.js/commit/c1d2350159716857a281147a4d6e8de1b8179c36))



## [1.3.1](https://github.com/yaohaixiao/dom.js/compare/1.3.0...1.3.1) (2023-11-17)


### Bug Fixes

* 修复 insertBefore 和 insertAfter 中的非法值判断错误；调整 append() 和 prepend() 方法的代码逻辑 ([746e921](https://github.com/yaohaixiao/dom.js/commit/746e9211d09e0eeea8792dae942121610e2601f7))


### Features

* 添加 remove() 方法并添加对应的 API 文档； ([a355d52](https://github.com/yaohaixiao/dom.js/commit/a355d528997735c0a4e81bafa7804111766be8cc))



# [1.3.0](https://github.com/yaohaixiao/dom.js/compare/1.2.0...1.3.0) (2023-11-06)


### Features

* 调整 color 模块的方法，支持 rgb hex hsl 之间的互换 ([626bd0f](https://github.com/yaohaixiao/dom.js/commit/626bd0f50768d39f95b32427b9626aec4a7a9428))
* 添加 serialize() 方法 ([8486a57](https://github.com/yaohaixiao/dom.js/commit/8486a578396388ebafe3e32bbf25c287c469bdd4))
* 添加 toHSL() 方法 ([7f47295](https://github.com/yaohaixiao/dom.js/commit/7f472958b50167b77fe431aa502eadd7fd43f886))
* 添加 toHSL() 方法和相应的 API 文档；调整 toRGB() 和 toHex() 方法，增加对 HSL 格式的色值转化； ([96ae3c0](https://github.com/yaohaixiao/dom.js/commit/96ae3c0eee8e48a3835abd4035397b2b134c4be0))



# [1.2.0](https://github.com/yaohaixiao/dom.js/compare/1.1.0...1.2.0) (2023-10-31)


### Features

* 添加 disable()、enable()、filter()、has() 和 pixel() 方法； ([1ad4e5b](https://github.com/yaohaixiao/dom.js/commit/1ad4e5b5f6a3fa7f4aecfd93f21d1153c2c28df5))
* 添加 readonly() 方法 ([e864054](https://github.com/yaohaixiao/dom.js/commit/e86405416ef93334a267054316ed2765738ce983))



# [1.1.0](https://github.com/yaohaixiao/dom.js/compare/1.0.0...1.1.0) (2023-10-17)


### Features

* 添加 build() wrap() 和 wrapAll() 方法 ([369a32f](https://github.com/yaohaixiao/dom.js/commit/369a32fe432ee2f2b27513c8b57a0ab689c477e7))
* 添加 show() 和 hide() 方法，调整 toggle() 方法逻辑；添加 replace() 方法； ([f0a5378](https://github.com/yaohaixiao/dom.js/commit/f0a5378627a9931777345d4f87942b1ec921baaa))
* 添加 wrapInner() 和 unwrap() 方法； ([38f0f42](https://github.com/yaohaixiao/dom.js/commit/38f0f42fe208aaf9c53d751908b7277b09eae30c))



# [1.0.0](https://github.com/yaohaixiao/dom.js/compare/0.5.0...1.0.0) (2023-10-13)


### Bug Fixes

* 统一 after() 和 before() 方法的返回类型； ([f47e1cb](https://github.com/yaohaixiao/dom.js/commit/f47e1cb0821eb02b19aff6bdedf8086f40898bbe))
* 修复 prepend() 和 append() 方法插入 HTML 字符串无法解析为 DOM 的问题； ([d0aec5d](https://github.com/yaohaixiao/dom.js/commit/d0aec5d6150560a58e7b9818b13b433b3a184995))


### Features

* 添加 nextBy() 和 prevBy() 方法； ([0250489](https://github.com/yaohaixiao/dom.js/commit/025048996ad899ec91d5da201d002b8ec98a956e))



# [0.5.0](https://github.com/yaohaixiao/dom.js/compare/0.4.0...0.5.0) (2023-10-13)


### Bug Fixes

* 修复 toHex() 和 toRGB() 方法，未设置 color 参数报错的问题； ([bcf0bc4](https://github.com/yaohaixiao/dom.js/commit/bcf0bc4749ac4c6e2a443960fe47789d7c62186a))


### Features

* 添加 setValue()、getValue() 和 val() 方法； ([6009c56](https://github.com/yaohaixiao/dom.js/commit/6009c56ec1610b6a14e2c68290a9f8549f29773c))



# [0.4.0](https://github.com/yaohaixiao/dom.js/compare/0.3.0...0.4.0) (2023-10-11)


### Bug Fixes

* 修复 outerHeight() 和 outerWidth() 方法中设置尺寸包括 margin 的计算逻辑错误的问题； ([dfa1b0a](https://github.com/yaohaixiao/dom.js/commit/dfa1b0ae9a913f95e11d10e2f21828218d3c361e))


### Features

* 添加 find() 和 findAll() 方法； ([49dd8b3](https://github.com/yaohaixiao/dom.js/commit/49dd8b35eb034b6d3da4fde320028b2f9e33fb12))
* 添加 getColor() 方法; ([538ffd2](https://github.com/yaohaixiao/dom.js/commit/538ffd2a1cb872b6107ccc293dcb1a50450f55be))
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
