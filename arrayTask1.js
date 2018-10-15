//Методы Массива


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

//add method "shift"
var firstDeleteElemetArray_myMonth =myMonth.shift();
console.log("работа метода \"shift\":")
console.log("первый  удаленный ел.массива:", firstDeleteElemetArray_myMonth);
console.log("Исходный массив:",myMonth);

//add method "join"
var myJoin=myMonth.join("-");
console.log("работа метода \"Join\":",myJoin);


//add method "concat"
var myConcat=myMonth.concat("декабрь");
console.log("работа метода(конкатенация 1 го значения\"декабрь\" ):",myConcat);
console.log("работа метода(конкатенация массивов ):");
var myArray_1=new Array("март");
var myArray_2=new Array("апрель");
console.log(" создаем 2 массива"+"Array_1: ", myArray_1 ," и myArray_2: ",myArray_2);
var myConcat_1=myArray_1.concat(myArray_2);
console.log("работа метода(конкатенация двух массивов ):",myConcat_1);

//add method "forEach"
var myNumber=new Array(6,3,7,8,1,3,9,4,12,10,6,28,20,15)
console.log("работа метода \"forEach\"",myNumber);

//add method "split"
var str='Июнь,Июль,Август';
console.log("Вывод строки",str);
var myArray=str.split(',');
for(var i=0;i<myArray.length;i++){
    console.log("Вывод",i+1,"-го елемента массива. Значение:",myArray[i]);
}














