let a : string = "reikhan"
console.log(a);

//eksplisit
let x: number = 90;
var y: string = "plugin"
console.log(x,y);

//implisit
let k = 20;
let o = "web"
console.log(k,o);

//tipe data any 
let kelas: any;
kelas = true;
console.log(kelas);

//union
let mouse : number;
mouse = 20;
console.log(mouse);

//aliases
type ID = number;

let userID: ID;
userID = 69;
console.log(userID);

//void
function oke(name:string): void{
    console.log(`hello, ${name}!`);
}
oke("siber");

//Array
let list : number[]
list = [1,2,3,4]

//generic array
let list1 : Array<number>;
list1 = [1,2,3,4]
console.log(list,list1);

//tuple
let person: [string, number];
person = ["siber", 20];
console.log(person);

//objek 
let person1 : {
    name : string,
    age : number,
    address : string
}
person1 = {
    name : "siber",
    age : 20,
    address : "tegal" 
}
console.log(person1);

//for loop
for (let i=0; i<5; i++){
    console.log(`loop ke ${i+1}`);
}

//while loop
let counter: number = 0;
while (counter <=5){
    counter++
    console.log(counter);
}

//if else
let nilai = 90
if (nilai>75){
    console.log("lulus");
}else{
    console.log("tidak lulus");
}

//switch case
let day: number = 3;
let dayName : string;
switch (day){
    case 1:
        dayName = "Senin"
        break;
    case 2:
        dayName = "Selasa"
        break;
    case 3:
        dayName = "Rabu"
        break;
    case 4:
        dayName = "Kamis"
        break;
    case 5:
        dayName = "Jumat"
        break;
    default:
        dayName = "Hari Lainnya"; 
}
console.log(`Hari ini adalah ${dayName}`);