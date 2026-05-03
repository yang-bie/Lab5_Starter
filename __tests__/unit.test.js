// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('1234@example.com')).toBe(true);
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('invalid-email')).toBe(false);
  expect(isEmail('test@.com')).toBe(false);
});

test('strong password', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
  expect(isStrongPassword('abc_123')).toBe(true);
  expect(isStrongPassword('1abc')).toBe(false);
  expect(isStrongPassword('abc')).toBe(false);
});

test('valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
  expect(isDate('1/1/2020')).toBe(true);
  expect(isDate('2020-12-31')).toBe(false);
  expect(isDate('12/31/20')).toBe(false);
});

test('valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('123456')).toBe(true);
  expect(isHexColor('#12345G')).toBe(false);
  expect(isHexColor('1234')).toBe(false);
});