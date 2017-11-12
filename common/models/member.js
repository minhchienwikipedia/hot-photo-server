'use strict';

module.exports = function(Member) {
  delete Member.validations.email;
  delete Member.validations.password;
};
