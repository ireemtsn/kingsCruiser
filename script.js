/*GİDİŞ VE DÖNÜŞ AYNI YERE OLAMAZ! */
$(document).ready(function() {
    $('#select1, #select2').change(function() {
        var value1 = $('#select1').val();
        var value2 = $('#select2').val();
        if (value1 === value2) {
            alert('The selected values must be different!');
        }
        localStorage.setItem("select1", value1);
        localStorage.setItem("select2", value2);
    });
});

/*GİDİŞ VE DÖNÜŞ YERLERİNİN STORAGE İLE YAZILMASI*/

$(document).ready(function() {
    // Get the saved values from localStorage
    var value1 = localStorage.getItem('select1');
    var value2 = localStorage.getItem('select2');
    if (value1 === value2) {
        alert('Aynı yere bilet kesilemez!');
        // Reset the select elements
        $('#select1').val('');
        $('#select2').val('');
        // Clear the saved values from localStorage
        localStorage.removeItem('select1');
        localStorage.removeItem('select2');
        // Update the displayed values
        $('#cruisingFrom').text('');
        $('#cruisingTo').text('');
    } else {
        // Set the text of the elements to the saved values
        $('#cruisingFrom').text(value1);
        $('#cruisingTo').text(value2);
    }
});


/*BİLET SAYISINI ARTTIRMA İŞLEMİ BUTON CLİCK KULLANILDI!*/

$(document).ready(function() {
    let vipBiletSayisi = $('#vip');
    $("#vipBiletArti").click(function(e) {
        e.preventDefault()


        vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
    });


})


/*BİLET SAYISINI AZALTMA İŞLEMİ BUTON CLİCK KULLANILDI!*/

$(document).ready(function() {
    let vipBiletSayisi = $('#vip');
    $("#vipBiletEksi").click(function(e) {
        e.preventDefault();
        let currentValue = parseInt(vipBiletSayisi.val());
        if (currentValue > 0) {
            vipBiletSayisi.val(currentValue - 1);
        }
    });
});


$(document).ready(function() {
    let vipBiletSayisi = $('#firstClass');
    $("#firstClassBiletArti").click(function(e) {
        e.preventDefault()

        vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
    });


});

$(document).ready(function() {
    let vipBiletSayisi = $('#firstClass');
    $("#firstClassBiletEksi").click(function(e) {
        e.preventDefault();
        let currentValue = parseInt(vipBiletSayisi.val());
        if (currentValue > 0) {
            vipBiletSayisi.val(currentValue - 1);
        }
    });
});


$(document).ready(function() {
    let vipBiletSayisi = $('#Economy');
    $("#EconomyBiletEksi").click(function(e) {
        e.preventDefault();
        let currentValue = parseInt(vipBiletSayisi.val());
        if (currentValue > 0) {
            vipBiletSayisi.val(currentValue - 1);
        }
    });
});

$(document).ready(function() {
    let vipBiletSayisi = $('#Economy');
    $("#EconomyBiletArti").click(function(e) {
        e.preventDefault()


        vipBiletSayisi.val(parseInt(vipBiletSayisi.val()) + 1);
    });


})

/*BUGÜN VE GEÇMİŞ TARİHİ SEÇEMEZSİNİZ BÖLÜMÜ"*/
$(document).ready(function() {
    $('#datetime-local, #datetime-local2').change(function() {
        var value1 = $('#datetime-local').val();
        var value2 = $('#datetime-local2').val();
        var date1 = new Date(value1);
        var date2 = new Date(value2);
        var now = new Date();
        if (date1.getTime() === date2.getTime()) {
            alert('The selected values must be different!');
        } else if (date1 <= now || date2 <= now) {
            alert('bugünü ve geçmiş tarihi seçemezsiniz');
        } else {
            localStorage.setItem('departureDate', value1);
            localStorage.setItem('returnDate', value2);
        }
        updateDisplayedValues();
    });


    function updateDisplayedValues() {
        var departureDate = localStorage.getItem('departureDate');
        var returnDate = localStorage.getItem('returnDate');

        if (departureDate !== null && returnDate !== null) {
            $('#gidisTarihi').text(departureDate);
            $('#donusTarihi').text(returnDate);
        }
    }

    updateDisplayedValues();
});

$(document).ready(function() {
    // Input elemanlarının değerlerini aldığımız değişkenleri tanımlıyoruz.
    var number1 = $('#vip');
    var number2 = $('#firstClass');
    var number3 = $('#Economy');

    // Hedef elementini tanımlıyoruz.
    var result = $('#sonuc');
    var indirim = $('#indirimlisonuc');
    var total = $('#totalsonuc');

    // Input elemanlarının değerlerinde değişiklik olduğunda sonucu hesaplayıp yazdıran bir olay işleyicisi ekliyoruz.
    number1.add(number2).add(number3).on('input', function() {
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

        // Toplam bilet tutarını localStorage'a kaydediyoruz.
        localStorage.setItem("totalsonuc", totalsonuc);
        localStorage.setItem("vipBiletYazdir", val1 * 7000);
        localStorage.setItem("FristBiletYazdir", val2 * 1500);
        localStorage.setItem("EconomyBiletYazdir", val2 * 1000);


    });
});

/*BİLET SONUCU YAZDIRMA */

$(document).ready(function() {
    // localStorage'dan hesaplanan bilet tutarını alın
    var totalBiletTutari = localStorage.getItem('totalsonuc');

    // "total" id'li p etiketine bilet tutarını yazdırın
    $('#totalBiletYazdirma').text('$: ' + totalBiletTutari);

    // localStorage'dan hesaplanan bilet tutarını silin
    localStorage.removeItem('totalsonuc');
});

$(document).ready(function() {
    // Get the value of "vipBiletYazdir" from localStorage
    var vipBiletYazdirValue = localStorage.getItem("vipBiletYazdir");

    // Display the value on the page
    document.getElementById("vipBiletYazdir").textContent = "$ " + vipBiletYazdirValue;

});
$(document).ready(function() {
    // Get the value of "vipBiletYazdir" from localStorage
    var fristBiletYazdirValue = localStorage.getItem("FristBiletYazdir");

    // Display the value on the page
    document.getElementById("FristBiletYazdir").textContent = "$ " + fristBiletYazdirValue;

});

$(document).ready(function() {
    // Get the value of "vipBiletYazdir" from localStorage
    var economyBiletYazdirValue = localStorage.getItem("EconomyBiletYazdir");

    // Display the value on the page
    document.getElementById("EconomyBiletYazdir").textContent = "$ " + economyBiletYazdirValue;

});