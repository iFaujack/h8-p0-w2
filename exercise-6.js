//Nomor 1 while Looping

var count = 0;
console.log('Looping Pertama')
while (count < 20 ){
    count += 2;
    console.log(count + ' i love coding')
    
}

console.log('Looping kedua')
while (count > 0 ){
    console.log(count + ' i will become fullstack developer');
    count -= 2;
}


//nomor 2 Looping dengan for

console.log('Looping Pertama')
for(i=1; i<=20; i++){
    console.log(i, 'I love coding')
}

console.log('Looping Kedua')
for(i=20; i>=1; i--){
    console.log(i, 'I will become fullstack developer');
}


//nomor 3 Angka ganjil dan Genap
for (i=1; i<=100; i++){
    if (i%2==0){
      console.log('Genap')
    } else {
      console.log('Ganjil')
    }
  }
  
for (i=1; i<=100; i+=2){
    if (i%3==0){
        console.log(i+' Kelipatan 3')
    }
}
  
for (i=1; i<=100; i+=5){
    if (i%6==0){
        console.log(i+' Kelipatan 6')
    }
}
  
for (i=1; i<=100; i+=9){
    if (i%10==0){
    console.log(i+' Kelipatan 10')
    }
}



