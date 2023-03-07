
/* Bilet tarihi seçimi*/
let tarih = Date(prompt("gidiş ve dönüş tarihinizi seçiniz:"));


let gidis = document.getElementById('departure');

let donus = document.getElementById('return');

if(gidis==donus) {
    console.log("yanlış dönüş tarihi seçtiniz");
}

else{
    console.log("bilet seçebilirsiniz");
}

console.log(donus);









/*Biet ücreti hesaplama */

/*let vıp=document.getElementById('vıp');

let totalsonuc=parseInt(document.getElementById('vıp')*700);
console.log(totalsonuc);

let toplam=document.getElementById('subtotal');
let subtotal= parseInt(vıp*7000);

console.log(subtotal);
*/

