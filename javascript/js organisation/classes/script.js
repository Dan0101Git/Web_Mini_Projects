// console.log("hey danish!!")

//classes
//from what i have learnt
//classes seem like syntactical coating of combining constructors with declaring methods in contructor's protype together encapsulated in a single block
//but the author says it's much more than that
////function created my classs is labeeleed [[IsClassContructgor]]:true

// class User{
// constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// getAge(){
//     console.log(`${this.name}'s looks quite young for his age of ${this.age} `)
// }
// getName(){
//     console.log(`this guy's anme ois ${this.name}`);
// }
// }


// let danish=new User("danish",28);//using new keyword is quite important
// danish.getAge();



//getter and setter using classes
// class User{
//     constructor(name){
//         this.name=name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if(value.length<4){alert("name too short");
//             return;}
//          this._name=value       
//     }
// }
// let player = new User("danish");


// class Clock{
//     timer
//     constructor(template){
//         this.template=template;
//     }
//     render=()=>{
//         let date=new Date();
//     let hours=date.getHours();
//     let mins=date.getMinutes();
//     let secs=date.getSeconds();
//         if(hours<10)
//             hours='0'+hours;
//               if(mins<10)
//             mins='0'+mins;
//               if(secs<10)
//             secs='0'+secs;
//         const output=this.template.replace("h",hours).replace("m",mins).replace("s",secs)
//         console.log(output);
//     }
//     start(){
//       this.timer=  setInterval(this.render, 1000);
//     }
//     stop(){
// clearInterval(this.timer);
//     }
// }
// let clock=new Clock("h:m:s");
// clock.start();



//  class Person{

//         constructorr(firstName,lastName){
//             this.firstName=firstName;
//             this.lastName=lastName;
//         }
//         fullName(){
//             return this.firstName+" "+this.lastName
//         }
//         setFirstName(name){
//             this.firstName=name;
//         }
//         setLastName(sirName){
//             this.lastName=sirName;
//         }
//  }



//static class methods
// class Person{
//     static species(){
//         return "homo-sapiens "
//     }
//     static speciesSentence(){
//         console.log(`this person is classified as ${this.species()}`);//in sttaic metjhods this  points to class(Person)
//     }
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     getFullName(){
//         return this.firstName + " "+this.lastName;
//     }
//     setFirstName(name){
//         this.firstName=name;
//     }
//     setLastName(name){
//         this.lastName=name;
//     }
// }


//w3 problems

//1
// class Person {
//     constructor(name,age, country){
//         this.name=name;
//         this.age=age;
//         this.country=country;
//     }
//     get traits(){
//         console.log(`My name is ${this.name}, I am ${this.age} years old and i belong from ${this.country}`);
//     }

// }
// const person1=new Person("danish",28,"IN");
// const person2=new Person("ARORA",27,"US");
// person1.traits;


// //2
// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     get area(){
//         return `Area: ${this.width*this.height}`;
//     }
// }
// const rect1=new Rectangle(25,20);
// console.log(rect1.area);



// //3
// class Vehicle{
//     constructor(make,model,year){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//     }
//     get details(){
//         return `the vehicle is ${this.make}, It is of the model ${this.model} years old and it belongs from the year ${this.year}`;
//     }
// }

// class Car extends Vehicle{
//     constructor(make,model,year,doors){
//         super(make,model,year);
//         this.doors=doors;
//     }
//     get details(){
//        console.log(super.details) 
//         return `the vehicle is ${this.make}, It is of the model ${this.model} years old and it belongs from the year ${this.year} with ${this.doors} doors`;
//     }

// }
// let vehicle1=new Vehicle("tata","harrier",2023);
// let creta=new Car("hyundi","creta",2019,4);
// console.log(creta.details);

// //4
// class BankAccount{
//     constructor(account,balance){
//         this.account=account;
//         this.balance=balance;
//     }
//     get bankBalance(){
//         return `your current balance is ${this.balance} INR`;
//     }
//     deposit(amount){
//         this.balance=this.balance+amount;
//     }
//     withdraw(amount){
//         if(this.balance-amount>0)
//             this.balance=this.balance-amount
//         else{
//             console.log("Account balance less than 0, can't proceed with transaction");
//             console.log(this.bankBalance);
//         }
//         return;
//     }
// }

// const danish=new BankAccount("BORB0101",20000);
// danish.withdraw(25000);
// danish.deposit(5001);
// danish.withdraw(25000);
// console.log(danish.bankBalance);



// //5
// class Shape{
//     constructor(sides,length,breadth){
//         this.sides=sides;
//         this.length=length;
//         this.breadth=breadth;
//     }
//     get area(){
//         return this.length*this.breadth;
//     }
// }
// class Triangle extends Shape{
//     constructor(sides,side){
//         super(sides);
//         this.side=side;
//     }
//     get area(){
//         return 0.85*this.side*this.side;
//     }
// }


// //6
// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
//     get annualSalary(){
//         return 12*this.salary;
//     }
// }
// class Manager extends Employee{
//     constructor(name,salary,dept){
//         super(name,salary);
//         this.dept=dept;
//     }

//     annualSalary(bonus){
//        this.salary= super.annualSalary+bonus;
//     }
//     get salary(){
//         return this.salary;
//     }
// }


// class Book{
//     constructor(title,author,year){
//         this.title=title;
//         this.author=author;
//         this.year=year;
//     }
//     get details(){
//         console.log(`title :${this.title}`);
//         console.log(`author :${this.author}`);
//         console.log(`year :${this.title}`);
//     }
// }
// class Ebook extends Book{
//     constructor(title,author,year,price){
//         super(title,author,year);
//         this.price=price;
//     }
//     get details(){
//         super.details;
//         console.log(`price:${this.price}`);
//     }
// }



// //8
// class Animal{
//     constructor(species,sound){
//         this.species=species;
//         this.sound=sound;
//     }
//     makeSound(){
//         return `${this.species} ${this.sound}`
//     }
// }

// class Dog extends Animal{
//     constructor(species,sound,color){
//         super(species,sound);
//         this.color=color;
//     }
//     makeSound(){
//         return `Dog of color ${this.color} and of the species${super.makeSound()} `
//     }
// }


//9
// class Bank{
//     constructor(names,branches){
//         this.names=names;
//         this.branches=branches;
//     }
//     get branches(){
//      this.branches.forEach((branch)=>{console.log(`Branch :${branch}`)});
//     }
//     addBranch(branch){
//         this.branches.push(branch);
//     }
//     removeBranch(branch){
//        if( this.branches.find(branch))
//         this.branches=this.branches.filter((bankBranch)=>{bankBranch!==branch});
//        else{
//         console.log(`branch ${branch} not found`)
//        }
//     }
// }


//10
// class Product{
//     quantity=10;
//     constructor(id,name,price){
//         this.id=id;
//         this.name=name;
//         this.price=price;
//     }
//     get getPrice(){
//         return this.quantity*this.price;
//     }
// }
// class PersonalCareProduct extends Product{
//     constructor(id,name,price,warranty)
//     {
//         super(id,name,price);
//         this.warranty=warranty;
//     }
// }
// const sunScreen=new PersonalCareProduct("123","loreal",300,2);
// console.log(sunScreen.getPrice);



//11
// class BankAccount{
//     constructor(account,name,balance){
//         this.account=account;
//         this.name=name;
//         this.balance=balance;
//     }
//     get bankBalance(){
//         return `your current balance is ${this.balance} INR`;
//     }
//     deposit(amount){
//         this.balance=this.balance+amount;
//     }
//     withdraw(amount){
//         if(this.balance-amount>0)
//             this.balance=this.balance-amount
//         else{
//             console.log("Account balance less than 0, can't proceed with transaction");
//             console.log(this.bankBalance);
//             return false
//         }
//         return true;
//     }
//     transfer(receiver,amount){
//        if(this.withdraw(amount)) 
//         receiver.deposit(amount);
//         console.log(this.bankBalance);
//     }
// }


//12

// class University{
//     constructor(name,depts){
//         this.name=name;
//         this.depts=depts;
//     }
//     get departments(){
//         if(this.depts.length>0)
//      this.depts.forEach((department)=>{console.log(`Dept :${department}`)});
//     else console.log("no department found")
//     }
//     addDept(dept){
//         this.depts.push(dept);
//     }
//     removeDept(dept){
//        if( this.depts.find(dept))
//         this.depts=this.depts.filter((department)=>{department!==dept});
//        else{
//         console.log(`Department ${dept} not found`)
//        }
//     }
// }
