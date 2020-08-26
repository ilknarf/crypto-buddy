function encrypt(message, key) {
  console.log(key);
  return message
    .split('')
    .map((_, i) => message.charCodeAt(i) + Number(key))
    .join(' ');
}

function decrypt(encrypted, key) {
  return encrypted
    .split(' ')
    .map(v => String.fromCharCode(v - key))
    .join('');
}

export default { encrypt, decrypt };