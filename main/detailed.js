let test = localStorage.getItem('save');
let test2 = test.substring(0, test.length - 4)


let detailedT = document.querySelector("#detailedT");
let secondT = document.querySelector("#secondT");
console.log(detailedT);

let detailedTemplate = detailedT.innerHTML;
let detailedTemplate2 = secondT.innerHTML;
let first = document.querySelector(".first");
let second = document.querySelector(".second");

$.ajax({
    url: "https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json",
    dataType: "JSON"
}).done(function (ee) {
    let db = ee;


    for (let i = 0; i < db.length; i++) {

        if (test2 === db[i].imgSrc) {

            let list = "";

            list = detailedTemplate.replace(/{{colection}}/g, db[i].colection)
                .replace(/{{imgSrc}}/g, db[i].imgSrc)
                .replace(/{{productTitle}}/gi, db[i].productTitle)
                .replace(/{{model}}/gi, db[i].model)
                .replace(/{{price}}/g, db[i].price)

            first.innerHTML = list;


        }

    }

    let list3 = "";

    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * db.length)


        list3 = detailedTemplate2.replace(/{{colection}}/g, db[random].colection)
            .replace(/{{imgSrc}}/g, db[random].imgSrc)
            .replace(/{{productTitle}}/gi, db[random].productTitle)
            .replace(/{{model}}/gi, db[random].model)
            .replace(/{{price}}/g, db[random].price)

        second.innerHTML += list3;
        list3 = "";

    }





})
