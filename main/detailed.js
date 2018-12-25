let pictureAtt = localStorage.getItem('save');
let pictureAtt2 = localStorage.getItem('save1')  || "";

let detailedT = document.querySelector("#detailedT");
let secondT = document.querySelector("#secondT");

let detailedTemplate = detailedT.innerHTML;
let detailedTemplate2 = secondT.innerHTML;

let first = document.querySelector(".first");
let second = document.querySelector(".second");

// let cartArr = [];
// localStorage.setItem("cartTest" , cartArr) ;



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
  
function newDetailed(){
    localStorage.removeItem('save');
    localStorage.removeItem('save1');
    let pictureAttribute = this.getAttribute("src");
    let sub = pictureAttribute.substring(13, pictureAttribute.length - 4);
    localStorage.setItem("save1", sub);
    this.parentElement.setAttribute("href", "http://localhost/shopVezba/detailed.html");

}    

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
    list = detailedTemplate.replace(/{{colection}}/gi, arg.colection)
        .replace(/{{imgSrc}}/gi, arg.imgSrc)
        .replace(/{{productTitle}}/gi, arg.productTitle)
        .replace(/{{model}}/gi, arg.model)
        .replace(/{{price}}/gi, arg.price)

    first.innerHTML = list;

    let cart = document.querySelector('.add-to-cart');
    cart.addEventListener("click" , cartAdd);
 
// dodavanje stvari u korpu , dobro zezanje sa local storage :P // // // // 
///////////////////////////////////////////////////////////////////////////
   function cartAdd() {


         if (!localStorage.getItem("cartSave")) {
            console.log("test");
            let cartArr = [];
            cartArr.push(this.getAttribute("data-cart"));
            localStorage.setItem("cartSave" , JSON.stringify(cartArr));

         } else {
            console.log("testElse");
            let cartArr = JSON.parse(localStorage.getItem("cartSave"));
            cartArr.push(this.getAttribute("data-cart"));
            localStorage.setItem("cartSave" , JSON.stringify(cartArr));

            // let newCart = JSON.parse(localStorage.getItem("cartSave"));
            // newCart.push(this.getAttribute("data-cart"));
            // localStorage.setItem("cartSave" , JSON.stringify(newCart));
            
            
         }
         
          
    }
 
}

   for (let i = 0; i < db.length; i++) {

        if (pictureAtt === db[i].imgSrc || pictureAtt2 === db[i].imgSrc  ) {
            
            
        showOnlyOne(db[i]);
        

          if (db[i].colection === "female" ) {
              
            let holder = db.filter(function (z) {
                return z.colection === "female";
            });

            let newArr = [] ;
            let test = [].concat(holder);
            
            for (let i = 0; i < 4 ; i++) {
              let rnd = Math.floor(Math.random() * holder.length);  
              newArr.push(test[rnd]);
              test.splice(rnd,1);
              }

            showSecTemplate(newArr);
            addClick();
              
          } else {

            let holder = db.filter(function (z) {
                return z.colection === "male";
            });

            let newArr = [] ;
            let test = [].concat(holder);
        
            for (let i = 0; i < 4 ; i++) {
              let rnd = Math.floor(Math.random() * holder.length);  
              newArr.push(test[rnd]);
              test.splice(rnd,1);
              }

            showSecTemplate(newArr);
            addClick();

          }


        }

    }

 }

);


