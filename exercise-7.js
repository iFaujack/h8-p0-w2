//Nomor 1 - Menyusun barisan Bintang
var rows1 = 5;

for(i=0; i<rows1; i++){
    console.log('*');
}

//Nomor 2 - Menyusun barisan bintang dengan nested loop
var rows2 = 5;
var print = '';
for(i=0; i<rows1; i++){
    for (j=0; j<rows2; j++){
        var print = print + '*';
    }
    console.log(print);
    print = '';
}

//Nomor 3 - Menyusun Barisan Tangga bintang dengan nested looping 

var rows3= 5;
for(i=0; i<rows3; i++){
    for (j=0; j<=i; j++){
        print = print + '*';
    }
    console.log(print);
    print = '';
}