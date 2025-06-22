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
function Warrior(name,level,weapon){
    Hero.call(this,name,level);
    this.weapon=weapon;
}
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

function Hero(name,level,points){
    this.name=name;
    this.level=level;
    this.points=points;
}

let player1=new Hero("danish",2,1);

Hero.prototype.greet=function(){console.log(`${this.name} greets you`)}
console.log(`hey ${Object.getPrototypeOf(Warrior.prototype)===Object.prototype}`);
Object.setPrototypeOf(Warrior.prototype,Hero.prototype);
console.log( Object.getPrototypeOf(Object.getPrototypeOf(Warrior.prototype))===Object.prototype);

Object.setPrototypeOf(Healer.prototype,Hero.prototype);

Warrior.prototype.attack=function(){
    return `${this.name}  attacks with ${this.weapon}`;
}// console.log(Object.getPrototypeOf(Object.getPrototypeOf(player1))===Object.prototype);
Healer.prototype.heal=function(){
        return `${this.name}  spells ${this.spell}`;

}
let hero1=new Warrior("Danish",5,"knife");
console.log(hero1.attack());
hero1.greet();