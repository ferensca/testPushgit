/*

    concat string merupakan gabungan dua atau lebih string yang berbeda dalam suatu variable javascript. concat tidak dapat mengubah string yang ada dan concat berfungsi mengembalikan string yang baru
*/
    let kataPertama = "Anjelita";
    let kataKedua = "Kaminang";
    let hasilConcat = kataPertama.concat(" ", kataKedua);

    console.log(hasilConcat);

/*

    includes digunakan untuk mencari suatu substring berada dalam suatu string dan turn value dari includes adalah true atau false.

*/
    let kata = "Hello Anjelita";
    let cekKata = kata.includes("Anjelita");

    console.log(cekKata);

/* 
    length digunakan untuk menghitug jumlah string yang ada dalam suatu variabel dan menggunakan length kita dapat mengetahui banyaknya karakter yang ada dalam suatu string.
*/

    let namaLengkap = "Anjelita Ferensca Kaminang";
    console.log("Length Of Nama Lengkap : ", namaLengkap.length);


/*
    slipt digunakan untuk mengambil sebuah pola string untuk dibagikan ke string dalam daftar substring terurut dengan mencari pola dan menempatkan substring ke dalam array dan mengambilkan array tersebut.
*/
    let words = "slice";
    const wordsNew = words.split(" ");
    console.log(wordsNew);

/*
    slice digunakan untuk menyalin sebagian elemen array ke array yang baru. array dalam slice tidak akan berubah.

*/
    const students = ["Anjelita", "Jeno", "Jaemin"];
    const newStudents = students.slice(1, 3);
    console.log(newStudents);

/*
    substring berfungsi mengembalikan string baru yang berisi kan variabel yang diambil dari string asli. jika salah satu substring akhir atau awal didefiniskan sebagai angka negatif, hasilnya = 0
    
*/
    let textNama = "Anjelita";
    let subsNama = textNama.substring(1, 6);
    console.log(subsNama);

/*
    toLowerCase digunakan untuk mengonversi string yang ditentukan menjadi string baru yang hanya terdiri dari huruf kecil dan mengembalikan nilai tersebut.
    
*/
    let textNama = "ANJELITA KAMINANG";
    const resultToLowerCase = textNama.toLowerCase();
    console.log(resultToLowerCase);

/*

    toUpperCase berfungsi untuk merubah huruf kecil menjadi huruf besar semua.
*/
    let textNama = "anjelita kaminang";
    const resultToUpperCase = textNama.toUpperCase();
    console.log(resultToUpperCase);
/*

    trim digunakan untuk menghapus spasi dari kedua ujung string dan mengembalikan string baru, tanpa mengubah string asli. Spasi dalam konteks ini adalah semua karakter spasi putih (spasi, tab, spasi tanpa jeda, dll.) dan semua karakter terminator baris (LF, CR, dll.).

*/

    let textNama = "     ANJELITA KAMINANG     ";
    const resultTrim = textNama.trim();
    console.log(textNama);
    console.log(resultTrim);

/*
   valueOf digunakan untuk mengembalikan diberikan parameter Nomor nilai objek asli, parameter dapat jenis data asli, String dan sebagainya.

*/

    let strVar1 = "valueOf";
    console.log(strVar1.valueOf());
    let strVar2 = "bertujuan untuk mengembalikan nilai";
    console.log(strVar2.valueOf());

    console.log("objek asli".valueOf === strVar1.valueOf);

    console.log(strVar1.valueOf() === strVar2.valueOf());
    console.log(strVar2.valueOf() === "objek asli".valueOf());

