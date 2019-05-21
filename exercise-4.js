var tanggal = 12;
var bulan = 2;
var tahun = 1996;

var bulanTeks = '';


switch (bulan){
    case 1:
        bulanTeks = 'Januari'
        break;
    case 2: 
        bulanTeks = 'Februari'
        break;
    case 3: 
        bulanTeks = 'Maret'
        break;
    case 4:
        bulanTeks = 'April'
        break;
    case 5:
        bulanTeks = 'Mei'
        break;
    case 6:
        bulanTeks = 'Juni'
        break;
    case 7: 
        bulanTeks = 'Juli'
        break;
    case 8: 
        bulanTeks= 'Agustus'
        break;
    case 9: 
        bulanTeks = 'September'
        break;
    case 10:
        bulanTeks = 'October'
        break;
    case 11:
        bulanTeks = 'November'
        break;
    case 12: 
        bulanTeks = 'Desember'
        break;
    default:
        bulanTeks = 'Januari'
        break;
}

console.log(`${tanggal}-${bulanTeks}-${tahun}`)