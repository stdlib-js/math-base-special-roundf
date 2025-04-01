"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(c,i){
var a=require('@stdlib/number-float64-base-to-float32/dist'),f=require('@stdlib/math-base-special-floorf/dist'),n=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-negative-zerof/dist');function s(r){return n(r)?NaN:o(r)||r>=-.5&&r<0?-0:r>0&&r<.5?0:r>=8388608||r<=-8388608?r:f(a(r+.5))}i.exports=s
});var v=t();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
