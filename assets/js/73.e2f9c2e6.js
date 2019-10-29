(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{379:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("When passed a key and a value, it will saved into the storage,\nor update the value if the key already exists.")]),t._m(5),t._m(6),t._m(7),a("p",[t._v("When passed a key, will return that key's value.")]),t._m(8),t._m(9),t._m(10),a("p",[t._v("When passed a key, will remove that key and value from the storage.")]),t._m(11),t._m(12),t._m(13),t._m(14),a("p",[t._v("Returns an integer representing the number of key-value items stored in the storage.")]),t._m(15),t._m(16),t._m(17),a("p",[t._v("Returns an array that contains all keys stored in the storage.")]),t._m(18),t._m(19),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/3fdd3e2d1646ca41199d80c7be799858",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[this._v("#")]),this._v(" storage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("storage")]),this._v(" is a series of apis, support add, modify and delete stored data.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("There is NO same-origin-policy in weex storage moudle. Any one can access any key, even can change the value. So be careful of your usage.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setitem"}},[this._v("#")]),this._v(" setItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"setitem-key-value-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setitem-key-value-callback"}},[this._v("#")]),this._v(" setItem(key, value, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@key")]),this._v(', string, the name of the key you want to store. "" or null is not allowed.')]),e("li",[e("strong",[this._v("@value")]),this._v(', string, the name of the value you want to store."" or null is not allowed.')]),e("li",[e("strong",[this._v("@callback")]),this._v(", function, the callback function after executing this action.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getitem"}},[this._v("#")]),this._v(" getItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getitem-key-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getitem-key-callback"}},[this._v("#")]),this._v(" getItem(key, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@key")]),this._v(', string, the name of the key you want to retrieve the value of."" or null is not allowed.')]),e("li",[e("strong",[this._v("@callback")]),this._v(", function, the callback function after executing this action.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"removeitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeitem"}},[this._v("#")]),this._v(" removeItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"removeitem-key-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeitem-key-callback"}},[this._v("#")]),this._v(" removeItem(key, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@key")]),this._v(', string, the name of the key you want to remove."" or null is not allowed.')]),e("li",[e("strong",[this._v("@callback")]),this._v(", function, the callback function after executing this action.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" storage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// callback. 'e' is an object that contains 'result' and 'data'.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.result will return 'success' or 'failed' according to the executing result.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.data will always return 'undefined' in this function if success.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"length"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[this._v("#")]),this._v(" length")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"length-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length-callback"}},[this._v("#")]),this._v(" length(callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function after executing this action.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getallkeys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys"}},[this._v("#")]),this._v(" getAllKeys")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getallkeys-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys-callback"}},[this._v("#")]),this._v(" getAllKeys(callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function after executing this action.")])])}],!1,null,null,null);e.default=n.exports}}]);