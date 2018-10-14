//add new array
var myMonth=new Array("июнь","июль","август");
console.log("Исходный массив:",myMonth);

//add method "push"
myMonth.push("сентябрь","октябрь","ноябрь");
console.log("работа метода \"push\":",myMonth);

//add method "unshift"
myMonth.unshift("март","апрель","май");
console.log("работа метода \"unshift\":",myMonth);

//add method "pop"
var lastDeleteElemetArray_myMonth =myMonth.pop();
console.log("работа метода \"pop\":")
console.log("последний удаленный ел.массива:", lastDeleteElemetArray_myMonth);
console.log("Исходный массив:",myMonth);





