'use strict';
/*
Task 5
*/

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, prop) {
    let keys = []
    for (let obj of arr) {
      for (let key in obj) {
        if(key === prop){
          keys.push(obj[key])
        }
      }
    }
    return keys
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []