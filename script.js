// Normal Function 1
function fun1() {
	return "HELLO"
}
// Const Normal Function
const obj = {
	fun1() {
	return "Const Normal Function"
	}
}
// Arrow Function
var x = () => {
	return {'a':2,'b':3}
}
// Arrow Function in Const
const ar_obj = {
	fun1: () => {
		return this
	},
	fun2: () => {
		return this
	}
}

// "use strict" function

function fun1() {
	"use strict"
	console.log(this)
}
function fun2() {
	console.log(this)
}

//Prototype Object
function piza(type) {
	this.type = type
}

// Immidiately Invokable Function Expression (IIFE)
(function(){
	console.log('Let Function')
}())

let fun = () => {
	console.log('Arrow Function')
}
//Prototype Function

function Person(name,age) {
	this.name = name;
	this.age = age;
}
Person.prototype.getAge = function() {
	return this.age;
}
Person.prototype.getName = function() {
	return this.name;
}
//Inheritance Prototype Function
function GreatPerson(name,age) {
	Person.call(this,name,age)
}
GreatPerson.prototype = Object.create(Person.prototype)
let greatperson = new GreatPerson('MTE',50);

// Prototype Otherway

const car = {
	getname: function () {
		return this.name;
	}
}
let carr = Object.create(car)
carr.name = "Tokoyo"

let car2 = Object.create(car,{
	name: {value:'Labriogani'}
});
// ecmas -6 => Bable
class Person1 {
	static name = 'ETM'
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
	getAge() {
		console.log('Main Func',this.age)
	}
	static getStaticName() {
		return this.name;
	}
}

// console.log(Person1.getStaticName())
// console.log(out.name)
// console.log(out.getAge()

// Extend Function
class Person2 extends Person1 {
	constructor(name,age) {
		super(name,age);
		this.age = age + 10;
	}
	
}
let out1 = new Person2('Ye Min Eain',100)
// out1.getAge();

// HTTP Request Get From Site Jason
// let url = 'https://jsonplaceholder.typicode.com/posts';
// const xhttp = new XMLHttpRequest();
// xhr.open("GET",url);
// xhr.onreadystatechange = function () {
// 	if(this.status == 200 && this.readyState == 4) {
// 		console.log(this.responeText);
// 	}
// }
// xhr.send();

// CallBack Function
function show(result){
	console.log(result)
}
function add_num(a,b,cb) {
	sum = a+b;
	cb(sum);
}
// add_num(1,2,show);

// Promise Function

function Promise_fun(a) {
	return new Promise((resolve,reject)=>{
		if (a == 1) {
			resolve("True")
		} else {
			reject("Fail");
		}
	})
}
// Promise_fun(2)
// 	.then ((res)=> console.log(res))
// 	.catch((err)=> console.log(err));

// fetch function

// let url = "www.google.com";
// fetch (url)
// 	.then((res)=>console.log(res) )
// 	.catch((err)=> console.log(err) )

//async
// async function add(a,b){
// 	return a+b
// }
// add(2,4)
// 	.then((res)=> console.log(res) )
// 	.catch((err)=> console.log(err) );

// async + Promise + await

// async function add(a,b){
// 	const ret = new Promise((resolve,reject)=>{
// 		if (a==1){
// 			resolve(a+b);
// 		}else {
// 			reject ('ERROR---');
// 		}
// 	})
// 	const cd = await ret;
// 	return cd;
// }
// add(1,4)
// 	.then((res)=> console.log(res) )
// 	.catch((err)=> console.log(err) );

// fetch + Promise
// function add_num(a,b) {
// 	if (a==1){
// 		return a+b;
// 	}else {
// 		return false
// 	}
// }

// async function add(a,b){
// 	const ret = new Promise((resolve,reject)=>{
// 		fetch(add_num(a,b))
// 		.then((res)=>resolve(res))
// 		.catch((err)=>reject(err));
// 	})
// 	const cd = await ret;
// 	return cd;
// }
// add(1,4)
// 	.then((res)=> console.log(res) )
// 	.catch((err)=> console.log(err) );

/////// Error Handling
// try {
// 	fee();
// }catch(e){
// 	console.log(e);
// }finally{
// 	console.log('FInally continue')
// }

///////Regular Expression RegEx
///////exec=return index, test = return boolean,
///////match = return index,search = return boolean
// let reg=/minee/;
// let email = "Hello min";
// let rst_exec = reg.exec(email);
// let rst_test = reg.test(email);
// let rst_match = email.match(reg);
// let rst_search = email.search(reg);
// console.log(rst_exec);
// console.log(rst_test);
// console.log(rst_match);
// console.log(rst_search);
/////// RegEx-1
//////$=will last index string
//////^=will first index string

// let reg = /^Min/i;
// let letter = "msdf thu min";
// let result = letter.search(reg);
// console.log(result);
/////.=will append any character(eg: h.llo)
// let reg = /M.in/i;
// let letter = "ms";
// let result = reg.test(letter);
// console.log(result);
//////*=will append 0 or more character(eg.h*)
// let reg = /M*in/i;
// let letter = "min";
// let result = reg.test(letter);
// console.log(result);
//////?=will or condition (eg:a?b?)
// let reg = /Mi?a?n/i;
// let letter = "men";
// let result = reg.test(letter);
// console.log(result);
//////escape-character\
// let reg = /Min\$/i;
// let letter = "min$";
// let result = reg.test(letter);
////// RegEx-2
///// [ab]= a or b but not exist
// let reg = /m[ab]in/i;
// let letter = "mbin";
// let result = reg.test(letter);
/////^[ab] will start number with a or b but blank not accept
// let reg = /^[ab]in/i;
// let letter = "bain";
// let result = reg.test(letter);
/////[^ab] - can't start a or b and will accept other character.
/////([h]ar){2}
/////\w=any word character
/////\W = non word character
/////\d = digit number
/////\D = Non Digit Number
/////\s = space bar
/////\S = Non Space Bar
/////\b = boundary(no allow )
///// /x(?=y)/ = will x follow y
///// /x(?!y)/ = will x not follow y
let reg = /x(?!y)/i;
let letter = "xy";
let result = reg.test(letter);
console.log(result);