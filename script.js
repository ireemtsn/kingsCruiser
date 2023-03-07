
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
      
  

  











/*Biet ücreti hesaplama */

/*let vıp=document.getElementById('vıp');

let totalsonuc=parseInt(document.getElementById('vıp')*700);
console.log(totalsonuc);

let toplam=document.getElementById('subtotal');
let subtotal= parseInt(vıp*7000);

console.log(subtotal);
*/

