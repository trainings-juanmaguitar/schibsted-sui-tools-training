(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Cien:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("mXGw")),u=(a(n("W0B4")),a(n("r71r")));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.movies;return r.default.createElement("ul",{className:"SearchMovies"},t.map(function(e){return r.default.createElement("li",{key:e.id},r.default.createElement(u.default,{to:"/detail/"+e.id},e.title))}))};l.propTypes={},t.default=l},Z4yd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("06Hw")),u=o(n("YYXh")),a=o(n("mXGw")),l=o(n("W0B4")),i=o(n("Cien"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.movies;return a.default.createElement(a.default.Fragment,null,a.default.createElement("h1",null,"Searched by Name"),a.default.createElement(i.default,{movies:t}))};c.propTypes={},c.contextTypes={i18n:l.default.object},c.renderLoading=function(){return a.default.createElement("h1",null,"Loading...")},c.getInitialProps=function(){var e=(0,u.default)(r.default.mark(function e(t){var n,u,a=t.context;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.domain,e.next=3,n.get("list_movies_use_case").execute();case 3:return u=e.sent,e.abrupt("return",{movies:u||[],canonical:"http:/spa.mock/list"});case 5:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=c},izyu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("06Hw")),u=o(n("YYXh")),a=o(n("mXGw")),l=o(n("W0B4")),i=o(n("xLQr"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.movies;return a.default.createElement(a.default.Fragment,null,a.default.createElement("h1",null,"Popular movies"),a.default.createElement(i.default,{movies:t}))};c.propTypes={},c.contextTypes={i18n:l.default.object},c.renderLoading=function(){return a.default.createElement("h1",null,"Loading...")},c.getInitialProps=function(){var e=(0,u.default)(r.default.mark(function e(t){var n,u,a=t.context;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.domain,e.next=3,n.get("list_movies_use_case").execute();case 3:return u=e.sent,e.abrupt("return",{movies:u||[],canonical:"http:/spa.mock/list"});case 5:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=c},xLQr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("mXGw")),u=(a(n("W0B4")),a(n("r71r")));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.movies;return r.default.createElement("ul",{className:"ListMovies"},t.map(function(e){return r.default.createElement("li",{key:e.id},r.default.createElement(u.default,{to:"/detail/"+e.id},e.title))}))};l.propTypes={},t.default=l}}]);