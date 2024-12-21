function sayiSiralama(sirala){
    return sirala.sort((a, b) => a- b);
}

const sayilar = [25, 10, 6, 76, 50];
const siraliSayilar = sayiSiralama(sayilar);
console.log(siraliSayilar);
