

const greeting="hey i madanish";
class Danish{constructor(age,status){
    this.age=age;
    this.status=status;
}
get isEmployed(){
    return this.status;
}
set employmentStatus(value){
this.status=value;
}
}
const gooman="hey";
export default Danish;
export {gooman,greeting};