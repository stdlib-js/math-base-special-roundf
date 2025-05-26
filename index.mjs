// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorf@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.3-esm/index.mjs";function m(m){return e(m)?NaN:i(m)||m>=-.5&&m<0?-0:m>0&&m<.5?0:m>=8388608||m<=-8388608?m:t(s(m+.5))}export{m as default};
//# sourceMappingURL=index.mjs.map
