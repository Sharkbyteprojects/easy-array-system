const arrays = require('./main');
arrays.generate({name: "Haifisch", Adresse: "ocean", id: 2});
arrays.generate({name: "Leopard", Adresse: "not available", id: 1})
console.log(arrays.read(0));
console.log("----");
console.log(arrays.readall());
console.log(arrays.reade("0", "name"));
arrays.changee(1, 'Adresse', "'afrika'")
console.log(arrays.readall());