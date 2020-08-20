function encrypt(message, key) {

  return message
    .map((_, i) => message.charCodeAt(i))
    .map(v => String.fromCharCode(v + key))
    .join('');

}

function decrypt(message, key) {
  return encrypt(message, -key);
}

export default { encrypt, decrypt };