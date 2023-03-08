/* Bilet tarihi seçimi*/
/*let tarih = Date(prompt("gidiş ve dönüş tarihinizi seçiniz:"));


let gidis = document.getElementById('departure');
console.log(gidis);

let donus = document.getElementById('return');

if(gidis==donus) {
    console.log("yanlış dönüş tarihi seçtiniz");
}

else{
    console.log("bilet seçebilirsiniz");
}

console.log(donus);
*/

/*GİDİŞ VE DÖNÜŞ AYNI YERE OLAMAZ! */

$(document).ready(function () {
   $('#select1, #select2').change(function () {
      var value1 = $('#select1').val();
      var value2 = $('#select2').val();
      if (value1 === value2) {
         alert('The selected values must be different!');
      }
   });
});


/*BİLET SAYISINI ARTTIRMA İŞLEMİ BUTON CLİCK KULLANILDI!*/

$(document).ready(function () {
   let vipBiletSayisi = $('#vip');
   $("#vipBiletArti").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
   });


})


/*BİLET SAYISINI AZALTMA İŞLEMİ BUTON CLİCK KULLANILDI!*/

$(document).ready(function () {
   let vipBiletSayisi = $('#vip');
   $("#vipBiletEksi").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) - 1);

   });


});


$(document).ready(function () {
   let vipBiletSayisi = $('#firstClass');
   $("#firstClassBiletArti").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
   });


});

$(document).ready(function () {
   let vipBiletSayisi = $('#firstClass');
   $("#firstClassBiletEksi").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) - 1);
   });


})

$(document).ready(function () {
   let vipBiletSayisi = $('#Economy');
   $("#EconomyBiletEksi").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) - 1);
   });


})

$(document).ready(function () {
   let vipBiletSayisi = $('#Economy');
   $("#EconomyBiletArti").click(function (e) {
      e.preventDefault()


      vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
   });


})

/*BUGÜN VE GEÇMİŞ TARİHİ SEÇEMEZSİNİZ BÖLÜMÜ"*/

$(document).ready(function () {
   $('#datetime-local, #datetime-local2').change(function () {
      var value1 = $('#datetime-local').val();
      var value2 = $('#datetime-local2').val();
      var value1 = new Date($(this).val());
      var value2 = new Date($(this).val());
      var now = new Date();
      if (value1 === value2) {
         alert('The selected values must be different!');
      } else if (value1 <= now || value2 <= now)
         alert('bugünü ve geçmiş tarihi seçemezsiniz');
   });

});

/*
 $(document).ready(function() {
    $("#vip","#firstClass","#Economy").keyup(function() {
        var sayi1 = $("#vip").val();
        var sayi2 = $("#firstClass").val();
        var sayi3 = $("#Economy").val();

        var sonuc = parseInt((sayi1*7000)+(sayi2*1500)+(sayi3*1000));
        $("#sonuc").text(sonuc);
    });
});*/


/*BİLET FİYATINA İNDİRİM UYGULAMA VE TOTAL SONUCU YAZDIRMA*/

$(document).ready(function () {
   // Input elemanlarının değerlerini aldığımız değişkenleri tanımlıyoruz.
   var number1 = $('#vip');
   var number2 = $('#firstClass');
   var number3 = $('#Economy');

   // Hedef elementini tanımlıyoruz.
   var result = $('#sonuc');
   var indirim = $('#indirimlisonuc');
   var total = $('#totalsonuc');

   // Input elemanlarının değerlerinde değişiklik olduğunda sonucu hesaplayıp yazdıran bir olay işleyicisi ekliyoruz.
   number1.add(number2).add(number3).on('input', function () {
      // Input elemanlarının değerlerini alıyoruz.
      var val1 = number1.val() ? parseFloat(number1.val()) : 0;
      var val2 = number2.val() ? parseFloat(number2.val()) : 0;
      var val3 = number3.val() ? parseFloat(number3.val()) : 0;

      // Değerleri çarpıp sonucu hesaplıyoruz.
      var resultValue = (val1 * 7000) + (val2 * 1500) + (val3 * 1000);
      var indirimlisonuc = ((resultValue * (10) / 100));
      var totalsonuc = parseFloat((resultValue) - (indirimlisonuc));

      // Sonucu hedef elementine yazdırıyoruz.
      result.text('$ ' + resultValue);
      indirim.text('$ ' + indirimlisonuc);
      total.text('$ ' + totalsonuc);

   });
});


/* $(document).ready(function() {
   $('#date').on('change', function() {
     var selectedDate = new Date($(this).val()); // Seçilen tarihi al
     var now = new Date(); // Şimdiki zamanı al
     if (selectedDate < now) { // Eğer seçilen tarih şimdiki tarihten önceyse
       alert('Lütfen geçerli bir tarih seçin.'); // Uyarı mesajını göster
       $(this).val(''); // Seçilen tarihi temizle
     }
   });
 });*/


/*Biet ücreti hesaplama */

/*let vıp=document.getElementById('vıp');

let totalsonuc=parseInt(document.getElementById('vıp')*700);
console.log(totalsonuc);

let toplam=document.getElementById('subtotal');
let subtotal= parseInt(vıp*7000);

console.log(subtotal);
*/