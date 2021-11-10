//any,number,string,boolean,object,array,Tuple,Enum,undefined,null,void,never,unknown//

let myName:string = "mahedi hassan sharif";

type StringOrNumberOrBoolean =number | string | boolean;

let studentId:StringOrNumberOrBoolean=1105061;

type direction='left' | 'right'| 'top'| 'bottom';

 

studentId="sharif"
studentId=true

//object ...
interface Person{
    name:string;
    age:number;
    hobby?:string;
}


// type PersonType={name:string,age:number,hobby?:string}

let person:Person  ={
    name: "sharif",
    age: 21,
    hobby:"gaming"
}

let person2:Person={
    name: "student",
    age: 25,
     
}
 
//Array...
 
var numbers:(number | string | boolean)[] =[10,12,13,14,true,"Rahil","mahedi"];

var persons:Person[] =[
    {
        name: "sharif",
    age: 21,
    hobby:"gaming"
    },
    {
        name: "sharif",
    age: 21,
    hobby:"gaming"
    }
]

//function....
//void means if i don't return anything i will use void but if i return any value i will write just return type (string,number,boolean).... : ar por kichu dewar mane holo kichu return korle function ar pore : diye return type dite hoy
function func(name:string):string {
     return `My Name is ${name}`
}

var myname=func("Sharif");
 console.log(myname);

 function add(num1:number,num2:number):number {
    return num1 + num2;
 }
 var sum=add(10,30);
 

 function introduction(person:Person):Person {
    return person;
 }
 var personIntro=introduction({
    name:"Rahil",
    age:30,
    hobby:"Playing"
 })

 //Genaric function
// <T> is a variable which receive the type when function is called when string is passed <T> is receive string type .. when number is passed <T> is receive number type...
 const greeting=<T>(arr:T[]):T []=>{
     return arr;
 }
 
//  type arrResult=string | number | boolean;

//  const result=greeting<arrResult>(["adf", "dfd",23,true]);
 const result=greeting<string>(["adf", "dfd" ]);
 const resultBool=greeting<boolean>([true,false]);
 const resultNum=greeting<number>([23,2,4,6]);

  //enum

  enum Week{
      sat="Saturday",
      sun="Sunday",
      mon="Monday",
      tues="Tuesday",
      wed="Wednesday",
      thr="Thursday",
      fri="Friday"
  }
  console.log(Week);

