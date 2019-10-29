(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{304:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"globalevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#globalevent"}},[t._v("#")]),t._v(" globalEvent "),a("Badge",{attrs:{text:"0.14",type:"warn",vertical:"middle"}})],1),t._m(0),t._m(1),a("p",[t._v("WeexSDK 对获取应用前后台事件做了支持，开发者可以在页面内监听对应的事件，获取应用当前是前台或后台，以方便暂停音乐，视频等，只需要指定需要监听的事件名称和回调函数就可以，例如：")]),t._m(2),t._m(3),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/5a774e8ce3766c88038cab6fe3331f5b",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),a("OutboundLink")],1)]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("目前只有 platform 为 iOS 和 Android 才能支持。"),a("router-link",{attrs:{to:"/zh/docs/api/weex-variable.html#weex-environment-object"}},[t._v("获取当前 platform")])],1)]),t._m(4),a("p",[t._v("Android")]),t._m(5),a("p",[t._v("iOS")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("注册对一个全局事件的监听。")]),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("取消对一个全局事件的监听。")]),t._m(13),t._m(14),t._m(15)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("globalEvent")]),this._v(" 用于监听持久性事件，例如定位信息，陀螺仪等的变化。全局事件是需要额外 APIs 处理的次要 API。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"内置的全局事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置的全局事件"}},[this._v("#")]),this._v(" 内置的全局事件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'globalEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WXApplicationDidBecomeActiveEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WXApplicationDidBecomeActiveEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("WXApplicationDidBecomeActiveEvent")]),this._v("，应用被前台的时候触发")]),s("li",[s("strong",[this._v("WXApplicationWillResignActiveEvent")]),this._v("，应用即将被后台时候触发")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"触发全局事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发全局事件"}},[this._v("#")]),this._v(" 触发全局事件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmWXSDKInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireGlobalEventCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geolocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-Objective-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('[weexInstance fireGlobalEvent:@"geolocation" params:@{@"key":@"value"}];\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"addeventlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[this._v("#")]),this._v(" addEventListener")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"addeventlistener-eventname-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener-eventname-callback"}},[this._v("#")]),this._v(" addEventListener(eventName, callback)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("@eventName")]),this._v("，string，事件名称。")]),s("li",[s("strong",[this._v("@callback")]),this._v("，function，回调方法。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'globalEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geolocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get geolocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"removeeventlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeeventlistener"}},[this._v("#")]),this._v(" removeEventListener")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"removeeventlistener-eventname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeeventlistener-eventname"}},[this._v("#")]),this._v(" removeEventListener(eventName)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("@eventName")]),this._v("，string，事件名称。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'globalEvent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geolocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);