//Function Declaration
function sapa(nama:string){
    console.log("halo, aku " + nama);
}
sapa("Yasir"!)

function calculate (a:number, b:number, c:number){
    return a+b+c
}
let hasil : number = calculate(3, 5, 1)
console.log("hasil penjumlahan: "+ hasil);

//Arrow Function
let multiplication = ( x:number, y:number) => {
    return x*y
}
let result = multiplication(5,8)
console.log("Hasil perkalian: "+ result);

//Tugas1 funct expression
let cube = function(num:number) {
    return num ** 3;
}
console.log(cube(3));
console.log(cube(4));
console.log(cube(5));

//Tugas2
function greet(nama:string){
    console.log("Hello, aku " + nama);
}
greet("Rama"!)

//object
let person2: {
    name: string
    age: number
    address: string
}
person2 = {
    name: "Yasir Rizki",
    age: 20,
    address: "Tegal"
}
console.log(person2);