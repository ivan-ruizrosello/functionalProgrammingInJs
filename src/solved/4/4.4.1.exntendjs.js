const _ = require('lodash');

if(!String.prototype.first) {
  String.prototype.first =  _.partial(String.prototype.substring, 0, _)
}

console.log('Functional Programming'.first(3)); // -> 'Fun'

if(!String.prototype.asName) {
  String.prototype.asName = _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1')
}

console.log('Alonzo Church'.asName())


if(!String.prototype.parseUrl) {
  String.prototype.parseUrl = _.partial(
    String.prototype.match,
    /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/
  )
}

console.log('http://example.com'.parseUrl());
