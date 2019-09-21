  // pencere yüklendikten sonra bunu çalıştır.
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        var contentToRemove = document.querySelectorAll(".ui-front");//tüm sayfanın ücerine çıkanları seç
        for (var i = 0, len = contentToRemove.length; i < len; i++) { //seçtiklerini tek tek döndür
            contentToRemove[i].parentNode.removeChild(contentToRemove[i]); //şuan seçili olanı sil
        } //döndürme işlemini bitir

    }, 181);//181milisaniyede sonra aktif olur çünkü sitede bunun için önlem alınmış. 180.milisaniyesinde popup geliyor
