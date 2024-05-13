const ErFailure = require('../error/ErFailure');

/**
 * Void attribute.
 * @param {string} name - Name of the attribute
 * @param {Object} object - Object
 * @return {Object} - Free attribute
 */
const at_void = function(name, object = null) {
  let obj = object
  return {
    put: function(object) {
      if (obj != null) {
        throw new ErFailure(`Void attribute ${name} is already set, can't reset`)
      }
      obj = object
      return true
    },
    get: function() {
      if (obj == null) {
        throw new ErFailure(`Void attribute ${name} is not set, can't take`)
      }
      return obj
    },
    copy: function(_) {
      return at_void(name, obj)
    }
  }
}

module.exports = at_void
