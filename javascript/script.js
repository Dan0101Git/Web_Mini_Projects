// // making my first javascript constructor

//protypal inheritance

// function Book(title,author,pages,read){
// this.title=title;
// this.author=author;
// this.nopages=pages;
// this.read=read;
// this.info=function(){
//     console.log(`This book ${title} is written by ${author} and is huge considering ${this.nopages} pages, which i have ${read?"read":"not read"}`)
// }
// }
// function Player(name,type){
//     this.name=name;
//     this.type=type;

// }
// console.log(Book.prototype);
// // console.log(Object.getPrototypeOf(Book.prototype).prototype); only constructpor functions have .prototype property
// console.log(Object.getPrototypeOf(Book.prototype).hasOwnProperty('valueOf'));
// console.log(Object.prototype);
// Player.prototype.hey=function(){
//         console.log("this is a f"+this.name);}
// Object.setPrototypeOf(Book.prototype,Player.prototype);
// const book=new Book("the man who knew infiinity","ramanujan",1000,false);
// const player=new Player("danish","footballer");

// book.hey();



// function Book(title,author,pages,read){
// this.title=title;
// this.author=author;
// this.nopages=pages;
// this.read=read;
// this.info=function(){
//     console.log(`This book ${title} is written by ${author} and is huge considering ${this.nopages} pages, which i have ${read?"read":"not read"}`)
// }
// }
// const book=new Book("hey","i",200,true);
// let x=new Object();

// let y=[];
// y.push(1)

// // console.log(Object.setPrototypeOf(Object.prototype,Array.prototype)); this wont Worker,  sicne Object.prototype or Array.prototype are immutable
// console.log(Object.getPrototypeOf(Array.prototype)===Object.prototype)

//character game
// function Warrior(name,level,weapon){
//     Hero.call(this,name,level);
//     this.weapon=weapon;
// }
// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// function Hero(name,level,points){
//     this.name=name;
//     this.level=level;
//     this.points=points;
// }

// let player1=new Hero("danish",2,1);

// Hero.prototype.greet=function(){console.log(`${this.name} greets you`)}
// console.log(`hey ${Object.getPrototypeOf(Warrior.prototype)===Object.prototype}`);
// Object.setPrototypeOf(Warrior.prototype,Hero.prototype);
// console.log( Object.getPrototypeOf(Object.getPrototypeOf(Warrior.prototype))===Object.prototype);

// Object.setPrototypeOf(Healer.prototype,Hero.prototype);

// Warrior.prototype.attack=function(){
//     return `${this.name}  attacks with ${this.weapon}`;
// }// console.log(Object.getPrototypeOf(Object.getPrototypeOf(player1))===Object.prototype);
// Healer.prototype.heal=function(){
//         return `${this.name}  spells ${this.spell}`;

// }
// let hero1=new Warrior("Danish",5,"knife");
// console.log(hero1.attack());
// hero1.greet();


// javascipt info Challanges

// let animal={
//     jumps:null
// ,};

// let rabbit={
//     __proto__:animal,
//     jumps:true,
// };
// alert(rabbit.jumps);//should be true

// delete rabbit.jumps;

// alert(rabbit.jumps); //shpuld be null

// delete animal.jumps;

// alert(rabbit.jumps); //should be undefined

// challenge 2

// let head = {
//   glasses: 1,
  

// };

// let table = {
//   pen: 3,
//   __proto__:head,

// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:table,

// };

// let pockets = {
//   money: 2000,
//   __proto__:bed,
// };

// challenge 3


// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//     // or this.stomach=[food];  second solution with no inherent stomach property in speedy or lazy
//   }
// };

// let speedy = {
//   __proto__: hamster,
//   stomach:[]
// };

// let lazy = {
//   __proto__: hamster,
//   stomach:[],
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// function danish(){
//     console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(this))))===Object.prototype);
// }
// danish(); this is window object over  here,  above  code mentiones the deep prototype chain o fthe window object(when function is directly called)


// let car={
//     brand:"honda",
//     getbrand:function(){
//         return this.brand;
//     },
// };

// let brand=car.getbrand.bind(car);//bind is  afunction of Function protoype object
// console.log(brand());

//construcntor invocation

// function Car(brand){
//     this.brand=brand;
// }

// Car.prototype.getBrand=function(){
//     return this.brand;
// }
// let car=new Car('honda');
// console.log(car.getBrand());

//indirect invokation
// call and apply with function calling to provide with this as firstt argument
// getbrand.call(this.brand,seciond argument)


//arrow function cannot be used as constructor function
// let user={
//     hobbies:['cycling','guitar','bikepacking'],
//     name:'danish',
//     testme:function(){
//         this.hobbies.forEach(
//         (hobby)=>console.log(this.name+" "+hobby))
//     }//arrow function to get context of object in callbackfunctionss(new context) or use second argument with callbakc as object you want context in the callback
// }
// user.testme();

//object.create() function
// console.dir(Object.getPrototypeOf(Object.keys));
// const noproto=Object.create(null);//argument of obejct's prototype
// //main purpose of Object.create is to extend constructors

// const Car=function(mag){
//     this.mag="x";
// }
// Car.prototype.getcolor=function(color){
//     this.color=color;
//     console.log(this.color);
// }
// const Toycar=function(){}
// const newcar=new Car("x");

// const newtoycar=new Toycar();
// // Object.setPrototypeOf(Toycar.prototype,Car.prototype);
// newtoycar.getcolor('red');
// console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Toycar.prototype))===Object.prototype)
// console.log(newtoycar.getcolor('red'));//set protoype of constructor to other constructor
// can use create methoid to0
//  Toycar.prototype=Object.create(Car.prototype);





//factory functions, module patterns,iife and closures practice

//scope
// var first=function(){
//     console.log("hey");
// }
// window.first();//not availabke with const andd let, first isnt attached to window object if declkared wiuth const or let
//  function bro(){
//      let cool;
//      if(1===1){
//                 const cool="bro";

//      }
//      console.log(cool)
// return cool;
//  }
//  bro();
//  for(var i=0;i<10;i++){
//     console.log(i);
//  }
//  console.log(i+"hey");

//closures

//closure first example
// function outer(){
//     const outerVar="i am the outer var";
// return function(){
//     const innerVar="i am the inner var";
//     console.log(innerVar+", "+outerVar);
// }

// }
// const user=outer();
// user();
// function createGreeting(greeting){
//     const myGreet=greeting.toUpperCase();
//     return function(name){
//         return `${myGreet} ${name}`;
//     }
// }
// const myEc=createGreeting("namaste");
// const hey=createGreeting("hey");
// console.log(myEc("danish") +", "+ hey("danish"));
// console.log(hey("ishan"));// we did in two seperate functions so as to have standardised version of each greeting, and seperate greeting type  from the personw e are greetig
//so simply whenever we need ot have a specific greet to a person, we cann that greet function on the person'sname, segragation helps in arranging js code here


//private variables
// function creategame(name){
// let score=0;
// const win=function (){
//     score++;
//     return `${name}'s score:${score}`
// }
// return win;
// }
// const game1=creategame("fifa");
// game1();
// game1();

// console.log(game1());//score is private for the closure and closure stays un the memory as logn it is pointing to thw iinner function
// function creategame(name){
// let score=0;
// const win=function (){
//     score++;
//     return `${name}'s score:${score}`
// }
// return win;
// }
// function person(){
// const game1=creategame("fifa");
// return game1;
// }
// let newgame=person();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();

// console.log(newgame());







//module patterns

// const module=(function(){
//     const log=(message)=>{console.log(message+timesRun);}
// let timesRun=0;
//     const makeUpperCase=(text)=>{
//         log("hey danish");
//         timesRun++;
//         return text.toUpperCase();
//     }
//   return {
//      newTimesRun: timesRun,
//     makeUpperCase,
// }
// })();
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// console.log(module.newTimesRun);//module  is  aoughto  flcosre too, since  makeuppercase containins variable of outer  function, so timenewrun conetxt remains same
// module.timesRun=10;
// module.makeUpperCase("ishan");
// console.log(module.newTimesRun);


//some  rules

//efficiient dom usage

//protypal inheritance again
// const person={
//     species:"humans",
//     saySpecies:function(){
//         console.log(this.species);
//     },
//     sayName:function(){
// console.log(this.name);
//     }
// }
// let musician=Object.create(person);
// console.dir(Object.getPrototypeOf(person))
// console.dir(Object.getPrototypeOf(musician)===person);