var nama = "Fauzi";
var peran = "asdas";


if (nama === ""){
    console.log('Nama harus diisi')
} else if (peran === ""){
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`)
} else if (peran === "Ksatria"){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, Kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib"){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, Kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir"){
    console.log(`Selamat datang di dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`)
    console.log(`Halo ${peran} ${nama}, Ayo Naikkan Levelmu`)
}
