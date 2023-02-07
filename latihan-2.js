// Menghitung Volume Balok

function hitungVolumeBalok(panjang, lebar, tinggi) {
    let volume = panjang * lebar * tinggi
    return volume
}

let hasilVolume = (hitungVolumeBalok(10, 10, 10))
document.write ('<br>' + 'Volume : ' + hasilVolume + '<br>');

// Menghitung Luas Permukaan Balok

function hitungLuasPermukaanBalok(panjang, lebar, tinggi) {
    let luas = (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi) 
    return luas
}

let hasilLuas = (hitungLuasPermukaanBalok(10, 10, 10) * 2)
document.write ('Luas Permukaan : ' + hasilLuas);





 