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

var tape = require( 'tape' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isNegativeZerof = require( '@stdlib/math-base-assert-is-negative-zerof' );
var roundf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof roundf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function rounds a single-precision floating-point number to the nearest integer', function test( t ) {
	t.strictEqual( roundf( -4.2 ), -4.0, 'equals -4' );
	t.strictEqual( roundf( -4.5 ), -4.0, 'equals -4' );
	t.strictEqual( roundf( -4.8 ), -5.0, 'equals -5' );
	t.strictEqual( roundf( 4.2 ), 4.0, 'equals 4' );
	t.strictEqual( roundf( 4.5 ), 5.0, 'equals 5' );
	t.strictEqual( roundf( 9.99999 ), 10.0, 'equals 10' );
	t.strictEqual( roundf( 9.5 ), 10.0, 'equals 10' );
	t.strictEqual( roundf( 9.4 ), 9.0, 'equals 10' );
	t.strictEqual( roundf( 0.0 ), 0.0, 'equals 0' );
	t.strictEqual( roundf( 0.2 ), 0.0, 'equals 0' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v = roundf( -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = roundf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var v = roundf( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var v = roundf( NINF );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns the correct result for large positive non-decimal values', function test( t ) {
	var start = 8388608;
	var end = 8390000;
	var i;

	for ( i = start; i < end; i++ ) {
		t.strictEqual( roundf( i ), i, 'returns '+i );
	}
	t.end();
});

tape( 'the function returns the correct result for large negative non-decimal values', function test( t ) {
	var start = -8390000;
	var end = -8388608;
	var i;

	for ( i = start; i < end; i++ ) {
		t.strictEqual( roundf( i ), i, 'returns '+i );
	}
	t.end();
});
