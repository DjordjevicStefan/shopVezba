let template = document.querySelector("#sellCart");
let listShow = document.querySelector("#listCart");
templateInr = template.innerHTML;

let izabrano = JSON.parse(localStorage.getItem("cartSave"));
console.log(izabrano);

$.ajax({
    url: "https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json",
    dataType: "JSON"
}).done(function (ee) {
    let list = "";
    let data = ee;

    function showOnlyOne(arg){
        let list = "";
        list = templateInr.replace(/{{colection}}/gi, arg.colection)
            .replace(/{{imgSrc}}/gi, arg.imgSrc)
            .replace(/{{productTitle}}/gi, arg.productTitle)
            .replace(/{{model}}/gi, arg.model)
            .replace(/{{price}}/gi, arg.price)
    
        listShow.innerHTML += list;
    
    }

    //// loop koji prvo loopuje onoliko puta koliki je inicijalni arrej i za svaku iritaciju opet ulazi u loop koji trazi da li atribut sa im imenom postoji u json areju to jest u areju objekata sa kojima radimo. ako ga nadje samo zalepi taj jedan taplate za stranicu. /////

    for (let i = 0; i < izabrano.length; i++) {
        for (let y = 0; y < data.length; y++) {
            if (izabrano[i] === data[y].imgSrc) {
                showOnlyOne(data[y]);



            }
            
        }
        
    }
    

})