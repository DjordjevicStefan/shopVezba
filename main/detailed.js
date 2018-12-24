let test = localStorage.getItem('save');
let pictureAtt = test.substring(0, test.length - 4)




let detailedT = document.querySelector("#detailedT");
let secondT = document.querySelector("#secondT");


let detailedTemplate = detailedT.innerHTML;
let detailedTemplate2 = secondT.innerHTML;




let first = document.querySelector(".first");
let second = document.querySelector(".second");

$.ajax({
    url: "https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json",
    dataType: "JSON"
}).done(function (ee) {
    let db = ee;


function showSecTemplate(holder){
        let list1 = "";
        for (let i = 0; i < holder.length; i++) {
        list1 += detailedTemplate2.replace(/{{colection}}/g, holder[i].colection)
            .replace(/{{imgSrc}}/gi, holder[i].imgSrc)
            .replace(/{{productTitle}}/gi, holder[i].productTitle)
            .replace(/{{model}}/gi, holder[i].model)
            .replace(/{{price}}/gi, holder[i].price)
    }
        second.innerHTML = list1;

}

function showOnlyOne(arg){
    let list = "";
    list = detailedTemplate.replace(/{{colection}}/g, arg.colection)
        .replace(/{{imgSrc}}/g, arg.imgSrc)
        .replace(/{{productTitle}}/gi, arg.productTitle)
        .replace(/{{model}}/gi, arg.model)
        .replace(/{{price}}/g, arg.price)

    first.innerHTML = list;
}

   for (let i = 0; i < db.length; i++) {

        if (pictureAtt === db[i].imgSrc) {
        showOnlyOne(db[i]);
        

          if (db[i].colection === "female" ) {
              
            let holder = db.filter(function (z) {
                return z.colection === "female";
            });
            let newArr = [] ;
            for (let i = 0; i < 4 ; i++) {
              let rnd = Math.floor(Math.random() * holder.length);  
              newArr.push(holder[rnd]);
              holder.splice(rnd,1);
              }
            showSecTemplate(newArr);
              
          } else {

            let holder = db.filter(function (z) {
                return z.colection === "male";
            });
            let newArr = [] ;
            for (let i = 0; i < 4 ; i++) {
              let rnd = Math.floor(Math.random() * holder.length);  
              newArr.push(holder[rnd]);
              holder.splice(rnd,1);
              }
            showSecTemplate(newArr);

          }


        }

    }

    

 }

);
