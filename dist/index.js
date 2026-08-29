"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=a(function(l,i){
var f=require('@stdlib/number-float64-base-to-float32/dist'),n=require('@stdlib/math-base-special-floorf/dist'),o=require('@stdlib/math-base-assert-is-nanf/dist'),s=require('@stdlib/math-base-assert-is-negative-zerof/dist');function v(r){return o(r)?NaN:s(r)||r>=-.5&&r<0?-0:r>0&&r<.5?0:r>=8388608||r<=-8388608?r:n(f(r+.5))}i.exports=v
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
