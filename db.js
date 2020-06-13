var firstRoute  = require('./products.json');
var secondRoute = require('./employees.json');

module.exports = function() {
return {
products  : firstRoute,
employees : secondRoute,
 }
}