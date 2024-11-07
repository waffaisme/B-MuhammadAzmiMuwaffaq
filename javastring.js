// Antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Tambah pembeli baru
antrian.push("Nabila");
antrian.push("Maza", "Elsi");

// Antrian terakhir pulang ke rumah
antrian.pop();

// Antrian pertama dan kedua sudah mendapatkan belanjaannya
antrian.shift(); // Ray
antrian.shift(); // Fiki

// Pembeli baru yang nyerobot antrian
antrian.unshift("Tomi");

// Hasil akhir antrian
console.log("Hasil akhir antrian:", antrian);
