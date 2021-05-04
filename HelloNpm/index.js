const _ = require('lodash')

function newArray(num) {
    let arr = _.range(num)
    return arr;
}

module.exports = newArray;