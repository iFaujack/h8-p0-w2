function konversiMenit(menit){
    var hour = Math.floor(menit/60);
    var minute= menit%60;
    minute = minute < 10 ? '0' + minute : minute;
    /* atau bisa juga menggunakan if biasa seperti ini
        if (minute < 10){
            minute = '0' + minute;
        }
     */
    return hour +':'+ minute;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


// var menit = 80 * (1/60);
// var test = 0.333 * 60;
// console.log(menit,test);