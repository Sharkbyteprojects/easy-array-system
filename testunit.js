const arrays = require('./main');
function test(test){
arrays.generate({name: "Haifisch", Adresse: "ocean", id: 2});
arrays.generate({name: "Leopard", Adresse: "not available", id: 1})
arrays.changee(1, 'Adresse', "'afrika'")
test.equal(arrays.readall());
test.done();
}
module.exports = {test};