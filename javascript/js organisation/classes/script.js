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









