"use strict";(self.webpackChunkexample_graphiql_vector=self.webpackChunkexample_graphiql_vector||[]).push([[284],{8284:function(e,t,o){o.r(t),o.d(t,{f:function(){return l}});var n=o(889),r=Object.defineProperty,i=function(e,t){return r(e,"name",{value:t,configurable:!0})};function f(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(o){if("default"!==o&&!(o in e)){var n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:function(){return t[o]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(f,"_mergeNamespaces");var a={exports:{}};!function(e){function t(t,n,f,a){if(f&&f.call){var l=f;f=null}else l=r(t,f,"rangeFinder");"number"==typeof n&&(n=e.Pos(n,0));var d=r(t,f,"minFoldSize");function u(e){var o=l(t,n);if(!o||o.to.line-o.from.line<d)return null;if("fold"===a)return o;for(var r=t.findMarksAt(o.from),i=0;i<r.length;++i)if(r[i].__isFold){if(!e)return null;o.cleared=!0,r[i].clear()}return o}i(u,"getRange");var c=u(!0);if(r(t,f,"scanUp"))for(;!c&&n.line>t.firstLine();)n=e.Pos(n.line-1,0),c=u(!1);if(c&&!c.cleared&&"unfold"!==a){var s=o(t,f,c);e.on(s,"mousedown",(function(t){p.clear(),e.e_preventDefault(t)}));var p=t.markText(c.from,c.to,{replacedWith:s,clearOnEnter:r(t,f,"clearOnEnter"),__isFold:!0});p.on("clear",(function(o,n){e.signal(t,"unfold",t,o,n)})),e.signal(t,"fold",t,c.from,c.to)}}function o(e,t,o){var n=r(e,t,"widget");if("function"==typeof n&&(n=n(o.from,o.to)),"string"==typeof n){var i=document.createTextNode(n);(n=document.createElement("span")).appendChild(i),n.className="CodeMirror-foldmarker"}else n&&(n=n.cloneNode(!0));return n}i(t,"doFold"),i(o,"makeWidget"),e.newFoldFunction=function(e,o){return function(n,r){t(n,r,{rangeFinder:e,widget:o})}},e.defineExtension("foldCode",(function(e,o,n){t(this,e,o,n)})),e.defineExtension("isFolded",(function(e){for(var t=this.findMarksAt(e),o=0;o<t.length;++o)if(t[o].__isFold)return!0})),e.commands.toggleFold=function(e){e.foldCode(e.getCursor())},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},e.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold")},e.commands.foldAll=function(t){t.operation((function(){for(var o=t.firstLine(),n=t.lastLine();o<=n;o++)t.foldCode(e.Pos(o,0),{scanUp:!1},"fold")}))},e.commands.unfoldAll=function(t){t.operation((function(){for(var o=t.firstLine(),n=t.lastLine();o<=n;o++)t.foldCode(e.Pos(o,0),{scanUp:!1},"unfold")}))},e.registerHelper("fold","combine",(function(){var e=Array.prototype.slice.call(arguments,0);return function(t,o){for(var n=0;n<e.length;++n){var r=e[n](t,o);if(r)return r}}})),e.registerHelper("fold","auto",(function(e,t){for(var o=e.getHelpers(t,"fold"),n=0;n<o.length;n++){var r=o[n](e,t);if(r)return r}}));var n={rangeFinder:e.fold.auto,widget:"\u2194",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(e,t,o){if(t&&void 0!==t[o])return t[o];var r=e.options.foldOptions;return r&&void 0!==r[o]?r[o]:n[o]}e.defineOption("foldOptions",null),i(r,"getOption"),e.defineExtension("foldOption",(function(e,t){return r(this,e,t)}))}(n.a.exports),function(e){e.defineOption("foldGutter",!1,(function(t,r,i){i&&i!=e.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",u),t.off("changes",c),t.off("viewportChange",s),t.off("fold",p),t.off("unfold",p),t.off("swapDoc",c)),r&&(t.state.foldGutter=new o(n(r)),d(t),t.on("gutterClick",u),t.on("changes",c),t.on("viewportChange",s),t.on("fold",p),t.on("unfold",p),t.on("swapDoc",c))}));var t=e.Pos;function o(e){this.options=e,this.from=this.to=0}function n(e){return!0===e&&(e={}),null==e.gutter&&(e.gutter="CodeMirror-foldgutter"),null==e.indicatorOpen&&(e.indicatorOpen="CodeMirror-foldgutter-open"),null==e.indicatorFolded&&(e.indicatorFolded="CodeMirror-foldgutter-folded"),e}function r(e,o){for(var n=e.findMarks(t(o,0),t(o+1,0)),r=0;r<n.length;++r)if(n[r].__isFold){var i=n[r].find(-1);if(i&&i.line===o)return n[r]}}function f(e){if("string"==typeof e){var t=document.createElement("div");return t.className=e+" CodeMirror-guttermarker-subtle",t}return e.cloneNode(!0)}function a(e,o,n){var i=e.state.foldGutter.options,a=o-1,d=e.foldOption(i,"minFoldSize"),u=e.foldOption(i,"rangeFinder"),c="string"==typeof i.indicatorFolded&&l(i.indicatorFolded),s="string"==typeof i.indicatorOpen&&l(i.indicatorOpen);e.eachLine(o,n,(function(o){++a;var n=null,l=o.gutterMarkers;if(l&&(l=l[i.gutter]),r(e,a)){if(c&&l&&c.test(l.className))return;n=f(i.indicatorFolded)}else{var p=t(a,0),g=u&&u(e,p);if(g&&g.to.line-g.from.line>=d){if(s&&l&&s.test(l.className))return;n=f(i.indicatorOpen)}}(n||l)&&e.setGutterMarker(o,i.gutter,n)}))}function l(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function d(e){var t=e.getViewport(),o=e.state.foldGutter;o&&(e.operation((function(){a(e,t.from,t.to)})),o.from=t.from,o.to=t.to)}function u(e,o,n){var i=e.state.foldGutter;if(i){var f=i.options;if(n==f.gutter){var a=r(e,o);a?a.clear():e.foldCode(t(o,0),f)}}}function c(e){var t=e.state.foldGutter;if(t){var o=t.options;t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){d(e)}),o.foldOnChangeTimeSpan||600)}}function s(e){var t=e.state.foldGutter;if(t){var o=t.options;clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){var o=e.getViewport();t.from==t.to||o.from-t.to>20||t.from-o.to>20?d(e):e.operation((function(){o.from<t.from&&(a(e,o.from,t.from),t.from=o.from),o.to>t.to&&(a(e,t.to,o.to),t.to=o.to)}))}),o.updateViewportTimeSpan||400)}}function p(e,t){var o=e.state.foldGutter;if(o){var n=t.line;n>=o.from&&n<o.to&&a(e,n,n+1)}}i(o,"State"),i(n,"parseOptions"),i(r,"isFolded"),i(f,"marker"),i(a,"updateFoldInfo"),i(l,"classTest"),i(d,"updateInViewport"),i(u,"onGutterClick"),i(c,"onChange"),i(s,"onViewportChange"),i(p,"onFold")}(n.a.exports);var l=f({__proto__:null,default:a.exports},[a.exports])}}]);
//# sourceMappingURL=284.0879d049.chunk.js.map