const muuid = require('./index');
const quantity = 50000
const result = muuid({
    format: [ 'adjective', 'color', 'verb', 'noun', 'number' ],
    quantity: quantity,
    duplicateReport: true
})
const sampleSize = quantity > 10 ? 10 : quantity
console.info('\nData Sample: ')
console.info(result.slice(0, sampleSize))
