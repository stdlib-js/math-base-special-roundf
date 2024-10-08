/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var floorf = require( '@stdlib/math-base-special-floorf' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isNegativeZerof = require( '@stdlib/math-base-assert-is-negative-zerof' );


// MAIN //

/**
* Rounds a single-precision floating-point number to the nearest integer.
*
* @param {number} x - input value
* @returns {number} output value
*
* @example
* var v = roundf( -4.2 );
* // returns -4.0
*
* @example
* var v = roundf( -4.5 );
* // returns -4.0
*
* @example
* var v = roundf( -4.6 );
* // returns -5.0
*
* @example
* var v = roundf( 9.99999 );
* // returns 10.0
*
* @example
* var v = roundf( 9.5 );
* // returns 10.0
*
* @example
* var v = roundf( 9.2 );
* // returns 9.0
*
* @example
* var v = roundf( 0.0 );
* // returns 0.0
*
* @example
* var v = roundf( -0.0 );
* // returns -0.0
*
* @example
* var v = roundf( Infinity );
* // returns Infinity
*
* @example
* var v = roundf( -Infinity );
* // returns -Infinity
*
* @example
* var v = roundf( NaN );
* // returns NaN
*/
function roundf( x ) {
	if ( isnanf( x ) ) {
		return NaN;
	}
	if ( isNegativeZerof( x ) || ( x >= -0.5 && x < 0.0 ) ) {
		return -0.0; // -0
	}
	if ( x > 0.0 && x < 0.5 ) {
		return 0.0; // 0
	}

	// If the magnitude is big enough, there's no place for the fraction part. If we try to add 0.5 to this number, 1.0 will be added instead...
	if ( x >= 8388608.0 || x <= -8388608.0 ) {
		return x;
	}
	return floorf( float64ToFloat32( x + 0.5 ) );
}


// EXPORTS //

module.exports = roundf;
