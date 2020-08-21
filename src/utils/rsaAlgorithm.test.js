import {_euclideanAlgorithm, computePrivateKey, encryptMessage } from './rsaAlgorithm';

// Euclidean Algorithm
test('_euclideanAlgorithm: coprime returns 1', () => {
  expect(_euclideanAlgorithm(6n, 5n)).toBe(1n);
});

test('_euclideanAlgorithm: gcd is 5', () => {
  expect(_euclideanAlgorithm(30n, 25n)).toBe(5n);
});

test('_euclideanAlgorithm: throws when n1 number', () => {
  expect(() => _euclideanAlgorithm(30, 25n)).toThrow(TypeError);
});

test('_euclideanAlgorithm: throws when n2 number', () => {
  expect(() => _euclideanAlgorithm(30n, 25)).toThrow(TypeError);
});


test('_euclideanAlgorithm: throws when both number', () => {
  expect(() => _euclideanAlgorithm(30, 25)).toThrow(TypeError);
});

// computePrivateKey
test('computePrivateKey: finds first private key for 3, 5, and pub: 14', () => {
  expect(computePrivateKey(3n, 5n, 7n)).toBe(7n);
});

test('computePrivateKey: finds first private key for 3, 17, and pub: 14', () => {
  expect(computePrivateKey(3n, 17n, 7n)).toBe(23n);
});

test('computePrivateKey: throws when p1 number', () => {
  expect(() => computePrivateKey(3, 17n, 7n)).toThrow(TypeError);
});

test('computePrivateKey: throws when p2 number', () => {
  expect(() => computePrivateKey(3n, 17, 7n)).toThrow(TypeError);
});

test('computePrivateKey: throws when p1 number', () => {
  expect(() => computePrivateKey(3n, 17n, 7)).toThrow(TypeError);
});

test('computePrivateKey: throws when all number', () => {
  expect(() => computePrivateKey(3, 17, 7)).toThrow(TypeError);
});

// encryptMessage
test('encrypteMessage: "hello" encrypts as expected', () => {
  expect(encryptMessage('hello', 577n, 71273n )).toBe('3e35 c797 c476 c476 40b4');
});