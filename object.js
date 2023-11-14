function addprop(obj, key) {
  obj[key] = true;
}

var obj = { key: "name" };
// console.log(obj);

// addprop(obj, "9atouss");

// console.log(obj);

function delete_object(obj, key) {
  delete obj[key];
}
var myobj = { test: "name" };

console.log(myobj, "before eexecution");
delete_object(myobj, "test");
console.log(myobj, "after execution");

function add(obj1, key, obj2) {
  obj1[key] = obj2;
}
var myobj1 = {};
var coffe = "coffe";
var myobj2 = { direct: true };
console.log(myobj1, "before eexecution");
add(myobj1, "test", myobj2);
console.log(myobj1, "after execution");
