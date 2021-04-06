function nbYear(p0, percent, aug, p){
    // let n digunakan untuk menampung hasil
    let n = 0;
    //looping untuk melakukan perhitungan
    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * (percent * 0.01)) + aug); //penggunaan math floor untuk mengembalikan bilangan menjadi bilangan bulat
        n++;
    }
    return n;
}
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);