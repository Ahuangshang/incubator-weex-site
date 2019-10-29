(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{305:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("ul",[t._m(2),t._m(3),t._m(4),s("li",[s("code",[t._v("getLayoutDirection")]),s("Badge",{attrs:{text:"0.20.0+",type:"warn",vertical:"middle"}}),t._v("\n获取某个组件的布局方向（rtl、lrt、inherit）")],1)]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/56e0d256cbb26facd958dbd6424f42b2",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1)]),t._m(10),s("p",[t._v("获取某个元素 View 的外框。")]),t._m(11),t._m(12),s("p",[t._v("回调方法中的数据样例：")]),t._m(13),t._m(14),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/d69ec16302e06300096c7285baef538a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),s("OutboundLink")],1)]),t._m(15),s("h2",{attrs:{id:"getlayoutdirection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getlayoutdirection"}},[t._v("#")]),t._v(" getLayoutDirection "),s("Badge",{attrs:{text:"0.20.0+",type:"warn",vertical:"middle"}})],1),s("p",[t._v("获取当前的布局方向，是 Left to Right，还是 Right to Left。")]),t._m(16),t._m(17),s("p",[t._v("callback方法返回数据样例：")]),t._m(18),s("p",[t._v("示例")]),t._m(19),s("h2",{attrs:{id:"addrule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addrule"}},[t._v("#")]),t._v(" addRule "),s("Badge",{attrs:{text:"0.12.0+",type:"warn",vertical:"middle"}})],1),t._m(20),s("p",[t._v("开发者可以使用下面的代码加载自定义字体：")]),t._m(21),t._m(22),t._m(23),t._m(24),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/7e328ee2ac9b7205c9ee37f4e509263d",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1),t._v(".")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[this._v("#")]),this._v(" dom")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("dom")]),this._v(" 模块用于对 weex 页面里的组件节点进行一部分特定操作。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("scrollToElement")]),this._v("\n将 list 的某个子节点滚动到当前视口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("getComponentRect")]),this._v("\n获取某个组件的 bounding rect 布局信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("addRule")]),this._v("\n添加 font-face rule")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"scrolltoelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoelement"}},[this._v("#")]),this._v(" scrollToElement")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("让页面滚动到 ref 对应的组件，这个 API 只能用于可滚动组件的子节点，例如 "),e("code",[this._v("<scroller>")]),this._v("，"),e("code",[this._v("<list>")]),this._v(", "),e("code",[this._v("<waterfall>")]),this._v(" 等可滚动组件中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"scrolltoelement-ref-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoelement-ref-options"}},[this._v("#")]),this._v(" scrollToElement(ref, options)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("@ref")]),t._v("，要滚动到的那个节点。")]),s("li",[s("strong",[t._v("@options")]),s("ul",[s("li",[s("strong",[s("code",[t._v("offset")])]),t._v("，一个到其可见位置的偏移距离，默认是 "),s("code",[t._v("0")]),t._v("。")]),s("li",[s("strong",[s("code",[t._v("animated")])]),t._v("，是否需要附带滚动动画，默认是 true。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getcomponentrect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentrect"}},[this._v("#")]),this._v(" getComponentRect")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getcomponentrect-ref-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentrect-ref-callback"}},[this._v("#")]),this._v(" getComponentRect(ref, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@ref")]),this._v("，要滚动到的那个节点。")]),e("li",[e("strong",[this._v("@callback")]),this._v("，异步方法，通过回调返回信息。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("353")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("353")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("如果要获取 viewport 的包围框，第一个参数  "),e("code",[this._v("ref")]),this._v(" 可以指定为 "),e("code",[this._v("'viewport'")]),this._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("ul",[e("li",[this._v("此方法需要在节点渲染后调用才能获取正确的信息，可在 "),e("code",[this._v("mounted")]),this._v(" 或 更新数据后 "),e("code",[this._v("updated")]),this._v(" 中调用")]),e("li",[this._v("如果想要获取到 Weex 视口容器的布局信息，可以指定 ref 为字符串 'viewport'，即 getComponentRect('viewport', callback).")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getlayoutdirection-ref-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getlayoutdirection-ref-callback"}},[this._v("#")]),this._v(" getLayoutDirection(ref, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@ref")]),this._v("，要操作的节点。")]),e("li",[e("strong",[this._v("@callback")]),this._v("，回调方法中返回排版方向信息。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kkk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayoutDirection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Weex 提供 "),s("strong",[t._v("DOM.addRule")]),t._v(" 以加载自定义字体。开发者可以通过指定 "),s("strong",[t._v("font-family")]),t._v("加载 "),s("em",[t._v("iconfont")]),t._v(" 和 "),s("em",[t._v("custom font")]),t._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" domModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndomModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontFace'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontFamily'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconfont2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"url('http://at.alicdn.com/t/font_1469606063_76593.ttf')\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"addrule-type-contentobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addrule-type-contentobject"}},[this._v("#")]),this._v(" addRule(type, contentObject)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("@fontFace")]),t._v(" 协议名称，不可修改。")]),s("li",[s("strong",[t._v("@fontFamily")]),t._v(" font-family的名称。")]),s("li",[s("strong",[t._v("@src")]),t._v(" 字体地址，url('') 是保留字段，其参数如下:\n"),s("ul",[s("li",[s("strong",[s("code",[t._v("http")])]),t._v(". 从HTTP请求加载, e.g. "),s("code",[t._v("url('http://at.alicdn.com/t/font_1469606063_76593.ttf')")])]),s("li",[s("strong",[s("code",[t._v("https")])]),t._v(". 从HTTPS请求加载, e.g. "),s("code",[t._v("url('https://at.alicdn.com/t/font_1469606063_76593.ttf')")])]),s("li",[s("strong",[s("code",[t._v("local")])]),t._v(", "),s("em",[t._v("Android ONLY")]),t._v(". 从assets目录读取, e.g. "),s("code",[t._v("url('local://foo.ttf')")]),t._v(",  "),s("strong",[t._v("foo.ttf")]),t._v(" 是文件名在你的assets目录中.")]),s("li",[s("strong",[s("code",[t._v("file")])]),t._v(". 从本地文件读取, e.g. "),s("code",[t._v("url('file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')")])]),s("li",[s("strong",[s("code",[t._v("data")])]),t._v(". 从base64读取, e.g. "),s("code",[t._v("url('data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD+....')")]),t._v(", 上述data字段不全。")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("p",[s("code",[t._v("addRule")]),t._v(" 方法里的 "),s("code",[t._v("fontFamily")]),t._v(" 可以随意取。这个名字不是字体真正的名字。字体真正的名字（font-family），也就是注册到系统中的名字是保存在字体二进制文件中的。你需要确保你使用的字体的真正名字（font-family）足够特殊，否则在向系统注册时可能发生冲突，导致注册失败，你的字符被显示为‘?’。")]),s("p",[t._v("如果你使用 http://www.iconfont.cn/ 来构建你的 iconfont。确保在项目设置中，设置一个特殊的 font-family 名字。默认是 “iconfont”，但极大可能发生冲突。")]),s("p",[t._v("调用"),s("code",[t._v("addRule")]),t._v(" 在 "),s("code",[t._v("beforeCreate")]),t._v(" 中是被推荐的。")])])}],!1,null,null,null);e.default=n.exports}}]);