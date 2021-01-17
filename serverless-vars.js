const crypto = require('crypto');

const { BRANCH_NAME = 'development' } = process.env;

const branchName = () => BRANCH_NAME.replace(/[^0-9a-z]/gi, '-');

exports.branchHash = () =>
  crypto.createHash('md5').update(branchName()).digest('hex').slice(0, 12);

exports.branchName = branchName;
