$(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
let template = document.querySelector("#kolekcija");
templateInr = template.innerHTML;

let koll = document.querySelector("#koll");
let zenska = document.querySelector("#zenska");
let muska = document.querySelector("#muska");
let nfa = document.querySelectorAll('.nfa');



$.ajax({
    url: "https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json",
    dataType: "JSON"
}).done(function (ee) {
    let list = "";
    let data = ee;

    function showColecton(arg) {
        let list5 = "";
        for (let i = 0; i < arg.length; i++) {

            list5 += templateInr.replace(/{{colection}}/g, arg[i].colection)
                .replace(/{{newCol}}/g, arg[i].newCol)
                .replace(/{{popular}}/g, arg[i].popular)
                .replace(/{{action}}/g, arg[i].action)
                .replace(/{{imgSrc}}/g, arg[i].imgSrc)
                .replace(/{{productTitle}}/g, arg[i].productTitle)
                .replace(/{{model}}/g, arg[i].model)
                .replace(/{{price}}/g, arg[i].price)
        }
        koll.innerHTML = list5;
    }

    showColecton(data);
    addListener(data);

    zenska.addEventListener("click", onlyWomen);

    function onlyWomen() {
        event.preventDefault();
        let holder = data.filter(function (z) {
            return z.colection === "female";
        });
        showColecton(holder);
        addListener(holder);
    }

    muska.addEventListener("click", onlyM);

    function onlyM() {
        event.preventDefault();
        let holder = data.filter(function (z) {
            return z.colection === "male";
        });
        showColecton(holder);
        addListener(holder);
    }

    for (let i = 0; i < nfa.length; i++) {
        nfa[i].addEventListener("click", nfaShow);

    }

    function nfaShow() {
        event.preventDefault();
        if (this === nfa[0]) {
            let holder = data.filter(function (z) {
                return z.newCol === true;
            });
            showColecton(holder);
            addListener(holder);
        }


        if (this === nfa[1]) {
            let holder = data.filter(function (z) {
                return z.popular === true;
            });
            showColecton(holder);
            addListener(holder);
        }
        if (this === nfa[2]) {
            let holder = data.filter(function (z) {
                return z.action === true;
            });

            showColecton(holder);
            addListener(holder);
        }
    }

    function addListener(par) {
        let allSelect = document.querySelectorAll(".sell")
        for (let i = 0; i < par.length; i++) {
            allSelect[i].addEventListener("click", getInfo);

        }

    }
    function getInfo() {
        let pictureAttribute = this.getAttribute("src");
        let sub = pictureAttribute.substr(13);
        console.log(sub);
        localStorage.setItem("save", sub);
        this.parentElement.setAttribute("href", "http://localhost/shopVezba/detailed.html")
    }

});

