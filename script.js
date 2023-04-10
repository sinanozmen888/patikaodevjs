// İsim yazdırılması.
let myName = prompt("Lütfen Bir isim girin"); //isim istedik
let name = document.getElementById("myName"); // İsmin geleceği yeri değişkene atadık

myName = myName.charAt(0).toUpperCase() + myName.slice(1); // Bu kod ödevde yok ben ekledim. girilen ismi büyük harf ile başlatıyor daha güzel bir görüntü için

name.innerHTML = myName; // değişkene atatığımız yerin HTML koduna istediğimiz ismi yazdırdık

// Tarih Fonksiyonu

function showTime() {
    let myClock = document.getElementById("myClock"); // Anasayfada göstermek için yeri değişkene atadık
    let now = new Date(); //now değişkenini Date olarak ayarladık
    let day = now.getDate(); // alt alta now değişkenini kullanarak gün ay yıl vs. gibi değişkenleri atadık
    let month = now.getMonth() + 1; 
    let year = now.getFullYear(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds(); 

    // ayarlayamadığım tek şey 02:02 olmuyor 2:2 oluyor
  
    // Tarih ve saat bilgilerini birleştirir
    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  
    myClock.innerHTML = time //Tarihin geleceği yerin HTML'sine tüm zamanı atatığımı time ı gönderdik
  
   
    setTimeout(showTime, 1000); // bu kod saniyeyi arttırıyor
  }
  
  showTime(); // bu kod fonksiyonu başlatıyor