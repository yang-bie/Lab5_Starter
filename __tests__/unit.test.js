// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber returns true for phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with no formatting', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for incorrectly formatted phone number', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

// isEmail tests
test('isEmail returns true for numeric email username', () => {
  expect(isEmail('1234@example.com')).toBe(true);
});

test('isEmail returns true for normal email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail returns false for email without @ symbol', () => {
  expect(isEmail('invalid-email')).toBe(false);
});

test('isEmail returns false for email with missing domain name', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for password with uppercase and numbers', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});

test('isStrongPassword returns true for password with underscore and numbers', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword returns false for password starting with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword returns false for short weak password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate tests
test('isDate returns true for date in MM/DD/YYYY format', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('isDate returns true for single digit month and day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('isDate returns false for date using dashes', () => {
  expect(isDate('2020-12-31')).toBe(false);
});

test('isDate returns false for date with two digit year', () => {
  expect(isDate('12/31/20')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for three digit hex color with #', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor returns true for six digit hex color without #', () => {
  expect(isHexColor('123456')).toBe(true);
});

test('isHexColor returns false for hex color with invalid character', () => {
  expect(isHexColor('#12345G')).toBe(false);
});

test('isHexColor returns false for invalid hex color length', () => {
  expect(isHexColor('1234')).toBe(false);
});
