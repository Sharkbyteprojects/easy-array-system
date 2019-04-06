# Funktionen

- `generate(array)` = add to arrays the content of array. Example: `generate({name: "hai", testid: 3});` adds the content `{name: "hai", testid: 3}` at last
- `readall()` = Become the full array
- `read(idno)` = Read content of id. Example: `read(3)` reads the content of array 3
- `change(idno, array)` = Chnge content of id (idno) to array

## Examplefile

`const arrays = require('easy-array_sytem');
arrays.generate({name: "Haifisch", Adresse: "ocean", id: 2});
arrays.generate({name: "Leopard", Adresse: "not available", id: 1})
console.log(arrays.read(0));
console.log(arrays.readall());
arrays.changee(1, 'Adresse', "'afrika'")
console.log(arrays.readall());
console.log(arrays.reade(0, "name"));`

---

To start a array you must give in changee when you giva a number if the number 2 the following: "2" and thats rule is for all numbers!