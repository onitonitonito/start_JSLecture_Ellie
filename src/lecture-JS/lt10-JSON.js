"use strict";

// *************************
// lt10-JSON.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex10_0() {

}


//JSON : stringify (obj) <--> parse to (obj)
//JavaScript Object Notation

let json

const rabbit = {
  name : 'Tori',
  color: 'white',
  size : null,
  birthDate : new Date(),
  // symbol: Symbol("id"),                    // Error Occure
  jump : () => {
    console.log(`This '${name}' can jump!`);
    return name
  },
}



// TODO:
ex10_2();
ex10_1();


// 1. Object to JSON
// stringfy (OBJ)
function ex10_1() {
  json = JSON.stringify(true);
  console.log(json);

  json = JSON.stringify(['🍎', '🍌']);
  console.log(json);

  json = JSON.stringify(['apple', 'banana']);
  console.log(json);

  json = JSON.stringify(rabbit);
  console.log('stringify(rabbit) =', json);

  json = JSON.stringify(rabbit, ['name', 'color', 'size',]);
  console.log('stringify(custom) =', json);

  console.log('... return key:value ............');
  json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;                              // Error = symbol("id")
    return key == 'name' ? 'Ellie': value;         // control by arrow func.
  });

  console.log(json);

  console.log('... the rabbit will jump! .......');
  rabbit.jump();
}

// 2. JSON to Object
// parse(json)
function ex10_2() {
  // console.clear();
  json = JSON.stringify(rabbit);
  console.log(json);

  const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key == 'birthDate' ? new Date(value) : value;
  });

  console.log(obj);

  rabbit.jump();

  // obj.jump();     // Err
  console.log('   -->', rabbit.birthDate.getDate());
  console.log('  -->>', obj.birthDate.getDate());

  console.log(' -->>>', obj.birthDate);
}
