<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Round

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a single-precision floating-point number to the nearest integer.



<section class="usage">

## Usage

```javascript
import roundf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundf@deno/mod.js';
```

#### roundf( x )

Rounds a single-precision floating-point number to the nearest `integer`.

```javascript
var v = roundf( -4.2 );
// returns -4.0

v = roundf( -4.5 );
// returns -4.0

v = roundf( -4.6 );
// returns -5.0

v = roundf( 9.99999 );
// returns 10.0

v = roundf( 9.5 );
// returns 10.0

v = roundf( 9.2 );
// returns 9.0

v = roundf( 0.0 );
// returns 0.0

v = roundf( -0.0 );
// returns -0.0

v = roundf( Infinity );
// returns Infinity

v = roundf( -Infinity );
// returns -Infinity

v = roundf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Ties are rounded toward positive infinity.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import roundf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundf@deno/mod.js';

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'Value: %0.4f. Rounded: %0.4f.', x, roundf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-roundf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-roundf

[test-image]: https://github.com/stdlib-js/math-base-special-roundf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-roundf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-roundf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-roundf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-roundf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-roundf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-roundf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-roundf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-roundf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-roundf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-roundf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-roundf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-roundf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-roundf/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
