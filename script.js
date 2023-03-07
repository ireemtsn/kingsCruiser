
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


$(document).ready(function() {
    $('#select1, #select2').change(function() {
      var value1 = $('#select1').val();
      var value2 = $('#select2').val();
      if (value1 === value2) {
        alert('The selected values must be different!');
      }
    });
  });

  $(document).ready(function(){
  let vipBiletSayisi=  $('#vip');
  $("#vipBiletArti").click(function(e)
  { e.preventDefault()


   vipBiletSayisi.val(parseInt(vipBiletSayisi.val())+1);
  });


  })


  $(document).ready(function(){
    let vipBiletSayisi=  $('#vip');
    $("#vipBiletEksi").click(function(e)
    { e.preventDefault()
  
  
     vipBiletSayisi.val(parseInt(vipBiletSayisi.val())-1);
     
    });
  
  
    });


    $(document).ready(function(){
        let vipBiletSayisi=  $('#firstClass');
        $("#firstClassBiletArti").click(function(e)
        { e.preventDefault()
      
      
         vipBiletSayisi.val(parseInt(vipBiletSayisi.val())+1);
        });
      
      
        });

        $(document).ready(function(){
            let vipBiletSayisi=  $('#firstClass');
            $("#firstClassBiletEksi").click(function(e)
            { e.preventDefault()
          
          
             vipBiletSayisi.val(parseInt(vipBiletSayisi.val())-1);
            });
          
          
            })

            $(document).ready(function(){
                let vipBiletSayisi=  $('#Economy');
                $("#EconomyBiletEksi").click(function(e)
                { e.preventDefault()
              
              
                 vipBiletSayisi.val(parseInt(vipBiletSayisi.val())-1);
                });
              
              
                })

                $(document).ready(function(){
                    let vipBiletSayisi=  $('#Economy');
                    $("#EconomyBiletArti").click(function(e)
                    { e.preventDefault()
                  
                  
                     vipBiletSayisi.val(parseInt(vipBiletSayisi.val())+1);
                    });
                  
                  
                    })
      
  

                    $(document).ready(function() {
                        $('#datetime-local, #datetime-local2').change(function() {
                          var value1 = $('#datetime-local').val();
                          var value2 = $('#datetime-local2').val();
                          var value1= new Date($(this).val()); 
                          var value2= new Date($(this).val()); 
                          var now = new Date(); 
                          if (value1 === value2) {
                            alert('The selected values must be different!');
                          }
                          else if(value1 <= now || value2 <= now)
                          alert('bugünü ve geçmiş tarihi seçemezsiniz');
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

