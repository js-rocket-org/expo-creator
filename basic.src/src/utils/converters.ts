// General functions that convert inputs of one type to another (usually not for display)
// Before adding a functiol to this file check that if they belong into the formatters, encryptors, etc files first

import { Buffer } from 'buffer';

// Base64 functions.  This is slow replace with a native package
export const atob = (input: string) => Buffer.from(input, 'base64').toString('ascii');
export const btoa = (input: string) => Buffer.from(input, 'base64');

// Predictable JSON converters.  Will not throw errors you either get a result or empty string
export const JSON_parse = (input: string): string | object => {
  let result = '';
  try {
    result = JSON.parse(input);
  } catch (_) {
    // empty catch to prevent throwing error from this function
  }
  return result;
};

export const JSON_stringify = (
  input: unknown,
  replacer?: ((this: unknown, key: string, value: unknown) => unknown) | undefined,
  space?: string | number | undefined,
) => {
  let result = '';
  try {
    result = JSON.stringify(input, replacer, space);
  } catch (_) {
    // empty catch to prevent throwing error from this function
  }
  return result;
};
