function encrypt(message, key) {
  return message
    .map(v => message.charCodeAt(v) + key)
    .join(' ');
}

function decrypt(message, key) {
  return message
    .split()
    .map(v => String.fromCharCode(v - key))
    .join('');
}

export default { encrypt, decrypt };