(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{376:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("As it's known to all that, we can navigate back and forth in the web browser using the navigation bar.\nAnd The navigator module mimics the same behaviors in the iOS/Android application. Without such an ability, We will have to stay in the same page forever, so it is very important. Besides the navigation, the module can specify whether to apply animation or not during the transition.")]),t._m(1),t._m(2),a("p",[t._v("Push a weex page onto the navigator stack, you can specify whether apply animation when pushing. And you can also specify a callback function to be executed after the operation is over.")]),t._m(3),t._m(4),a("p",[t._v("Demo")]),t._m(5),t._m(6),a("p",[t._v("Pop a weex page onto the navigator stack, you can specify whether apply animation when popping. And you can also specify a callback function to be executed after the operation is over.")]),t._m(7),t._m(8),a("p",[t._v("Demo")]),t._m(9),t._m(10),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/f2daa25e32eec2a294d59a9144660cad",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"navigator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[this._v("#")]),this._v(" Navigator")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[this._v("#")]),this._v(" push")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"push-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push-options-callback"}},[this._v("#")]),this._v(" push(options, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@options")]),e("ul",[e("li",[e("strong",[e("code",[this._v("url")])]),this._v(", string, the URL of the weex page to push.")]),e("li",[e("strong",[e("code",[this._v("animated")])]),this._v(" boolean, if the weex page is push through animation, otherwise, false. Default value is true.")])])]),e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function to be called after executing this action.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[this._v("var navigator = weex.requireModule('navigator')\nvar modal = weex.requireModule('modal')\nvar bundleUrl = weex.config.bundleUrl;\nnavigator.push({\n  url: bundleUrl,\n  animated: \"true\"\n}, event => {\n  modal.toast({ message: 'callback: ' + event)\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[this._v("#")]),this._v(" pop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pop-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pop-options-callback"}},[this._v("#")]),this._v(" pop(options, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@options")]),e("ul",[e("li",[e("strong",[e("code",[this._v("animated")])]),this._v(", boolean, true if the weex page is pop through animation; otherwise, false. Default value is true.")])])]),e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function after executing this action.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[this._v("var navigator = weex.requireModule('navigator')\nvar modal = weex.requireModule('modal')\nnavigator.pop({ animated: \"true\"}, event => {\n      \tmodal.toast({ message: 'callback: ' + event)\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Due to the differences in the behavior of the navigation in clients, the above interfaces need to be adapted. You can implement the above interfaces on the client side by seeing the description of the navigation protocol.")]),e("p",[this._v("In addtion，you can read [How to extend] (https://github.com/apache/incubator-weex-site/blob/master/source/guide/extend-ios.md) in iOS/Android to learn how to register  the implementation the protocol on the client.")])])}],!1,null,null,null);e.default=n.exports}}]);