//Tugas 1

function shoutOut(){
    return 'Halo Function'
}

console.log(shoutOut());

//Tugas 2
function calculateMultiply(num1,num2){
    return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3
function processSentence(name,age,address,hobby){
    return `Nama Saya ${name}, umur saya ${age}, Alamat saya ${address}, dan saya punya hobby yaitu ${hobby}`;
}

var name = "Fauzi";
var age = 22;
var address = "Jakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 