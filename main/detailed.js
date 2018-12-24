let pictureAtt = localStorage.getItem('save');


let pictureAtt2 = "" ;

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
  
  
function addClick(){
        let allSelect = document.querySelectorAll(".add")
        for (let i = 0; i < 4; i++) {
            allSelect[i].addEventListener("click", newDetailed);

        }

    }
  
// function newDetailed(){
//     let pictureAttribute = this.getAttribute("src");
//     let sub = pictureAttribute.substr(13, pi);
//     localStorage.setItem("save1", sub);
//     this.parentElement.setAttribute("href", "http://localhost/shopVezba/detailed.html")

// }    

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

        if (pictureAtt === db[i].imgSrc ) {
            console.log(db[i]);
            
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
            // addClick();
              
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
            // addClick();

          }


        }

    }

 }

);
