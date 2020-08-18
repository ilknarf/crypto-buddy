/* global BigInt:false */
// must have both primes to efficiently compute the private key.
export function computePrivateKey(p1, p2, pub) {
  // Use Euler's theorem to calculate phi(p1p2) => phi(p1) * phi(p2).

  /*
   * This is the trapdoor, as multiplying the two prime results is easier
   * than factoring from the semiprime.
   */
  const key = (p1 - 1n) * (p2 - 1n);

  // check if coprime, to ensure unique decryption
  if (euclideanAlgorithm(key, pub) !== 1n) {
    throw 'invalid public key: not coprime to phi(n), gcd';
  }

  // brute force search for private key for which pub * priv === 1 mod key
  let priv = BigInt(0);

  while ((priv * pub) % key !== 1n) {
    priv++;
  }

  return priv;
}

/* anyone with the semiprime can encrypt the message, without having both primes
 * currently this implementation doesn't use a padding scheme, meaning that it is very
 * vulnerable to attacks
 */
export function encryptMessage(message, pub, semiprime) {

  // get charcodes for the string
  let messageBytes = getBytes(message);

  // encrypt message by taking the public key's power for each byte
  // then reduce bytes into space-separated hexadecimal numbers
  return exponentiateOverN(messageBytes, pub, semiprime)
    .map((v, i) => v.toString(16))
    .join(' ');
}

// exponentiate using the private key, resulting in
export function decryptMessage(message, priv, semiprime) {
  const bytes = message
    .split(/\s/)
    .map((v) => parseInt(v, 16));

  return String.fromCharCode(...exponentiateOverN(bytes, priv, semiprime));
}

function exponentiateOverN(bytes, factor, n) {
  return bytes
    .map((v) => Number(BigInt(v) ** factor % n));
}

// create byte array
function getBytes(str) {
  let bytes = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes
}

// quick implementation of Euclidean algorithm to determine GCD
function euclideanAlgorithm(n1, n2) {
  while (n2 !== 0n) {
    let t = n1 % n2;
    n1 = n2;
    n2 = t;
  }

  return n1;
}

export default {
  computePrivateKey,
  encryptMessage,
  decryptMessage,
};