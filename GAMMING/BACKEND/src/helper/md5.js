const md5 = require('md5');
module.exports = {
    md5enc: (string) => {
        return md5(string);
    }
};