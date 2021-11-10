var myName = "mahedi hassan sharif";
var studentId = 1105061;
studentId = "sharif";
studentId = true;
// type PersonType={name:string,age:number,hobby?:string}
var person = {
    name: "sharif",
    age: 21,
    hobby: "gaming"
};
var person2 = {
    name: "student",
    age: 25
};
//Array...
var numbers = [10, 12, 13, 14, true, "Rahil", "mahedi"];
var persons = [
    {
        name: "sharif",
        age: 21,
        hobby: "gaming"
    },
    {
        name: "sharif",
        age: 21,
        hobby: "gaming"
    }
];
//function....
//void means if i don't return anything i will use void but if i return any value i will write just return type (string,number,boolean).... : ar por kichu dewar mane holo kichu return korle function ar pore : diye return type dite hoy
function func(name) {
    return "My Name is " + name;
}
var myname = func("Sharif");
console.log(myname);
function add(num1, num2) {
    return num1 + num2;
}
var sum = add(10, 30);
function introduction(person) {
    return person;
}
var personIntro = introduction({
    name: "Rahil",
    age: 30,
    hobby: "Playing"
});
//Genaric function
// <T> is a variable which receive the type when function is called when string is passed <T> is receive string type .. when number is passed <T> is receive number type...
var greeting = function (arr) {
    return arr;
};
//  type arrResult=string | number | boolean;
//  const result=greeting<arrResult>(["adf", "dfd",23,true]);
var result = greeting(["adf", "dfd"]);
var resultBool = greeting([true, false]);
var resultNum = greeting([23, 2, 4, 6]);
//enum
var Week;
(function (Week) {
    Week["sat"] = "Saturday";
    Week["sun"] = "Sunday";
    Week["mon"] = "Monday";
    Week["tues"] = "Tuesday";
    Week["wed"] = "Wednesday";
    Week["thr"] = "Thursday";
    Week["fri"] = "Friday";
})(Week || (Week = {}));
console.log(Week);
