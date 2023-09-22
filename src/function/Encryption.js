const crypto = require('crypto');

const genRandomString = function(length) {
  try {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
  } catch (err) {
    throw new Error('Failed to generate random string');
  }
};

const sha512 = function(data, saltData) {
  try {
    const hash = crypto.createHmac('sha512', saltData);
    hash.update(data);
    const hashData = hash.digest('hex');
    return { saltData, hashData };
  } catch (err) {
    throw new Error('Failed to hash data');
  }
};

function saltHashData(data) {
  if (!data || typeof data !== 'string') {
    throw new Error('Invalid input data');
  }

  try {
    const salt = genRandomString(16);
    const hashData = sha512(data, salt);
    return { hashData: hashData.hashData, saltData: hashData.saltData };
  } catch (err) {
    throw new Error('Failed to salt and hash data');
  }
}

module.exports = {
  saltHashData,sha512
};
