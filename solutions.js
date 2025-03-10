"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue (truthEval) {
	return truthEval === true;
}

function isFalse (falseEval) {
	return falseEval === false;
}

function not (parameterToBeReversed) {
	return !parameterToBeReversed;
}

function addOne (number) {
	return parseFloat(number) + 1;
}

function isEven (number) {
	return parseFloat(number) % 2 === 0;
}

function isIdentical (firstInput, secondInput) {
	return firstInput === secondInput;
}

function isEqual (firstInput, secondInput) {
	return firstInput == secondInput;
}

function or (firstInput, secondInput) {
	return firstInput || secondInput;
}

function and (firstInput, secondInput) {
	return firstInput && secondInput;
}

function concat (firstInput, secondInput) {
	return firstInput.toString() + secondInput.toString();
}