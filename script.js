let add0 = document.getElementById("add0");
let cart0 = document.querySelector(".cart0")
let Add0 = document.querySelector(".Add0")
let childCart0 = document.querySelector(".child-cart0")
let Sub0 = document.querySelector(".Sub0")
let count0 = 0;

let add1 = document.getElementById("add1");
let cart1 = document.querySelector(".cart1")
let Add1 = document.querySelector(".Add1")
let childCart1 = document.querySelector(".child-cart1")
let Sub1 = document.querySelector(".Sub1")
let count1 = 0;

let add2 = document.getElementById("add2");
let cart2 = document.querySelector(".cart2")
let Add2 = document.querySelector(".Add2")
let childCart2 = document.querySelector(".child-cart2")
let Sub2 = document.querySelector(".Sub2")
let count2 = 0;

let add3 = document.getElementById("add3");
let cart3 = document.querySelector(".cart3")
let Add3 = document.querySelector(".Add3")
let childCart3 = document.querySelector(".child-cart3")
let Sub3 = document.querySelector(".Sub3")
let count3 = 0;

let add4 = document.getElementById("add4");
let cart4 = document.querySelector(".cart4")
let Add4 = document.querySelector(".Add4")
let childCart4 = document.querySelector(".child-cart4")
let Sub4 = document.querySelector(".Sub4")
let count4 = 0;

let add5 = document.getElementById("add5");
let cart5 = document.querySelector(".cart5")
let Add5 = document.querySelector(".Add5")
let childCart5 = document.querySelector(".child-cart5")
let Sub5 = document.querySelector(".Sub5")
let count5 = 0;

let add6 = document.getElementById("add6");
let cart6 = document.querySelector(".cart6")
let Add6 = document.querySelector(".Add6")
let childCart6 = document.querySelector(".child-cart6")
let Sub6 = document.querySelector(".Sub6")
let count6 = 0;

let add7 = document.getElementById("add7");
let cart7 = document.querySelector(".cart7")
let Add7 = document.querySelector(".Add7")
let childCart7 = document.querySelector(".child-cart7")
let Sub7 = document.querySelector(".Sub7")
let count7 = 0;

let add8 = document.getElementById("add8");
let cart8 = document.querySelector(".cart8")
let Add8 = document.querySelector(".Add8")
let childCart8 = document.querySelector(".child-cart8")
let Sub8 = document.querySelector(".Sub8")
let count8 = 0;

let add9 = document.getElementById("add9");
let cart9 = document.querySelector(".cart9")
let Add9 = document.querySelector(".Add9")
let childCart9 = document.querySelector(".child-cart9")
let Sub9 = document.querySelector(".Sub9")
let count9 = 0;

let add10 = document.getElementById("add10");
let cart10 = document.querySelector(".cart10")
let Add10 = document.querySelector(".Add10")
let childCart10 = document.querySelector(".child-cart10")
let Sub10 = document.querySelector(".Sub10")
let count10 = 0;

let add11 = document.getElementById("add11");
let cart11 = document.querySelector(".cart11")
let Add11 = document.querySelector(".Add11")
let childCart11 = document.querySelector(".child-cart11")
let Sub11 = document.querySelector(".Sub11")
let count11 = 0;

let add12 = document.getElementById("add12");
let cart12 = document.querySelector(".cart12")
let Add12 = document.querySelector(".Add12")
let childCart12 = document.querySelector(".child-cart12")
let Sub12 = document.querySelector(".Sub12")
let count12 = 0;

let add13 = document.getElementById("add13");
let cart13 = document.querySelector(".cart13")
let Add13 = document.querySelector(".Add13")
let childCart13 = document.querySelector(".child-cart13")
let Sub13 = document.querySelector(".Sub13")
let count13 = 0;

let add14 = document.getElementById("add14");
let cart14 = document.querySelector(".cart14")
let Add14 = document.querySelector(".Add14")
let childCart14 = document.querySelector(".child-cart14")
let Sub14 = document.querySelector(".Sub14")
let count14 = 0;

let add15 = document.getElementById("add15");
let cart15 = document.querySelector(".cart15")
let Add15 = document.querySelector(".Add15")
let childCart15 = document.querySelector(".child-cart15")
let Sub15 = document.querySelector(".Sub15")
let count15 = 0;



// Cheese Pasta
add0.addEventListener('click', () => {
    add0.style.display = "none"
    cart0.style.display = "flex";
    childCart0.textContent = 1
});
Add0.addEventListener('click', () => {
    count0 += 1
    childCart0.textContent = count0;
});
Sub0.addEventListener('click', () => {
    count0 -= 1
    childCart0.textContent = count0;
    if (count0 < 1) {
        count0 = 0;
        cart0.style.display = "none"
        add0.style.display = "block"
    };
});

// Vegetarian Pasta
add1.addEventListener('click', () => {
    add1.style.display = "none"
    cart1.style.display = "flex";
    childCart1.textContent = 1
});

Add1.addEventListener('click', () => {
    count1 += 1
    childCart1.textContent = count1;
});
Sub1.addEventListener('click', () => {
    count1 -= 1
    childCart1.textContent = count1;
    if (count1 < 1) {
        count1 = 0;
        cart1.style.display = "none"
        add1.style.display = "block"
    };
});

// Spicy Noodles
add2.addEventListener('click', () => {
    add2.style.display = "none"
    cart2.style.display = "flex";
    childCart2.textContent = 1
});
Add2.addEventListener('click', () => {
    count2 += 1
    childCart2.textContent = count2;
});
Sub2.addEventListener('click', () => {
    count2 -= 1
    childCart2.textContent = count2;
    if (count2 < 1) {
        count2 = 0;
        cart2.style.display = "none"
        add2.style.display = "block"
    };
});

// Vegetarian shawarma
add3.addEventListener('click', () => {
    add3.style.display = "none"
    cart3.style.display = "flex";
    childCart3.textContent = 1
});
Add3.addEventListener('click', () => {
    count3 += 1
    childCart3.textContent = count3;
});
Sub3.addEventListener('click', () => {
    count3 -= 1
    childCart3.textContent = count3;
    if (count3 < 1) {
        count3 = 0;
        cart3.style.display = "none"
        add3.style.display = "block"
    };
});
// Chicken Roll
add4.addEventListener('click', () => {
    add4.style.display = "none"
    cart4.style.display = "flex";
    childCart4.textContent = 1
});
Add4.addEventListener('click', () => {
    count4 += 1
    childCart4.textContent = count4;
});
Sub4.addEventListener('click', () => {
    count4 -= 1
    childCart4.textContent = count4;
    if (count4 < 1) {
        count4 = 0;
        cart4.style.display = "none"
        add4.style.display = "block"
    };
})
// Veg Salad
add5.addEventListener('click', () => {
    add5.style.display = "none"
    cart5.style.display = "flex";
    childCart5.textContent = 1
});
Add5.addEventListener('click', () => {
    count5 += 1
    childCart5.textContent = count5;
});
Sub5.addEventListener('click', () => {
    count5 -= 1
    childCart5.textContent = count5;
    if (count5 < 1) {
        count5 = 0;
        cart5.style.display = "none"
        add5.style.display = "block"
    };
});
//Egg and Veg Salad Delight
add6.addEventListener('click', () => {
    add6.style.display = "none"
    cart6.style.display = "flex";
    childCart6.textContent = 1
});
Add6.addEventListener('click', () => {
    count6 += 1
    childCart6.textContent = count6;
});
Sub6.addEventListener('click', () => {
    count6 -= 1
    childCart6.textContent = count6;
    if (count6 < 1) {
        count6 = 0;
        cart6.style.display = "none"
        add6.style.display = "block"
    };
});
// Veggie Delight Sandwich
add7.addEventListener('click', () => {
    add7.style.display = "none"
    cart7.style.display = "flex";
    childCart7.textContent = 1
});
Add7.addEventListener('click', () => {
    count7 += 1
    childCart7.textContent = count7;
});
Sub7.addEventListener('click', () => {
    count7 -= 1
    childCart7.textContent = count7;
    if (count7 < 1) {
        count7 = 0;
        cart7.style.display = "none"
        add7.style.display = "block"
    };
})
// Paneer Paradise sandwich
add8.addEventListener('click', () => {
    add8.style.display = "none"
    cart8.style.display = "flex";
    childCart8.textContent = 1
});
Add8.addEventListener('click', () => {
    count8 += 1
    childCart8.textContent = count8;
});
Sub8.addEventListener('click', () => {
    count8 -= 1
    childCart8.textContent = count8;
    if (count8 < 1) {
        count8 = 0;
        cart8.style.display = "none"
        add8.style.display = "block"
    };
});
// Fruit dessert
add9.addEventListener('click', () => {
    add9.style.display = "none"
    cart9.style.display = "flex";
    childCart9.textContent = 1
});
Add9.addEventListener('click', () => {
    count9 += 1
    childCart9.textContent = count9;
});
Sub9.addEventListener('click', () => {
    count9 -= 1
    childCart9.textContent = count9;
    if (count9 < 1) {
        count9 = 0;
        cart9.style.display = "none"
        add9.style.display = "block"
    };
});
// vegetable dessert
add10.addEventListener('click', () => {
    add10.style.display = "none"
    cart10.style.display = "flex";
    childCart10.textContent = 1
});
Add10.addEventListener('click', () => {
    count10 += 1
    childCart10.textContent = count10;
});
Sub10.addEventListener('click', () => {
    count10 -= 1
    childCart10.textContent = count10;
    if (count10 < 1) {
        count10 = 0;
        cart10.style.display = "none"
        add10.style.display = "block"
    };
});
// Red velvet
add11.addEventListener('click', () => {
    add11.style.display = "none"
    cart11.style.display = "flex";
    childCart11.textContent = 1
});
Add11.addEventListener('click', () => {
    count11 += 1
    childCart11.textContent = count11;
});
Sub11.addEventListener('click', () => {
    count11 -= 1
    childCart11.textContent = count11;
    if (count11 < 1) {
        count11 = 0;
        cart11.style.display = "none"
        add11.style.display = "block"
    };
});
// White forest
add12.addEventListener('click', () => {
    add12.style.display = "none"
    cart12.style.display = "flex";
    childCart12.textContent = 1
});
Add12.addEventListener('click', () => {
    count12 += 1
    childCart12.textContent = count12;
});
Sub12.addEventListener('click', () => {
    count12 -= 1
    childCart12.textContent = count12;
    if (count12 < 1) {
        count12 = 0;
        cart12.style.display = "none"
        add12.style.display = "block"
    };
});
// Vegetable gravy
add13.addEventListener('click', () => {
    add13.style.display = "none"
    cart13.style.display = "flex";
    childCart13.textContent = 1
});
Add13.addEventListener('click', () => {
    count13 += 1
    childCart13.textContent = count13;
});
Sub13.addEventListener('click', () => {
    count13 -= 1
    childCart13.textContent = count13;
    if (count13 < 1) {
        count13 = 0;
        cart13.style.display = "none"
        add13.style.display = "block"
    };
});
// Vegetable rice with spices
add14.addEventListener('click', () => {
    add14.style.display = "none"
    cart14.style.display = "flex";
    childCart14.textContent = 1
});
Add14.addEventListener('click', () => {
    count14 += 1
    childCart14.textContent = count14;
});
Sub14.addEventListener('click', () => {
    count14 -= 1
    childCart14.textContent = count14;
    if (count14 < 1) {
        count14 = 0;
        cart14.style.display = "none"
        add14.style.display = "block"
    };
});
// Chinese noodles
add15.addEventListener('click', () => {
    add15.style.display = "none"
    cart15.style.display = "flex";
    childCart15.textContent = 1
});
Add15.addEventListener('click', () => {
    count15 += 1
    childCart15.textContent = count15;
});
Sub15.addEventListener('click', () => {
    count15 -= 1
    childCart15.textContent = count15;
    if (count15 < 1) {
        count15 = 0;
        cart15.style.display = "none"
        add15.style.display = "block"
    };
});

document.addEventListener('DOMContentLoaded', () => {

    let logIn = document.getElementById("log-in");
    let signBtn = document.querySelector(".sign-btn");
    let modal = document.getElementById("modal");
    let createAccount = document.getElementById("create-account");
    let existAccount = document.getElementById("exist-account");
    let clickCa = document.querySelector(".click-ca");
    let clickEa = document.querySelector(".click-ea");
    let close = document.getElementById("close");
    let popup = document.querySelector(".popup");
    let ipname = document.getElementById("name");
    let body = document.body;

    let submit = document.querySelector(".submit")
    submit.addEventListener('click', () => {
        modal.style.display = "none";
        body.style.pointerEvents = "auto";

    });

    signBtn.addEventListener('click', () => {
        modal.style.display = "block";
        clickEa.style.display = "none";
        body.style.overflow = "hidden";
        body.style.pointerEvents = "none";
        popup.style.opacity = "0.4";


    });

    close.onclick = function () {
        modal.style.display = "none";
        body.style.overflow = "auto";
        body.style.pointerEvents = "auto";
        popup.style.opacity = "1";
    };

    createAccount.addEventListener('click', () => {
        ipname.style.display = "block";
        logIn.textContent = "Sign Up";
        clickEa.style.display = "block";
        clickCa.style.display = "none";
        submit.textContent = "Create account";
    });

    existAccount.addEventListener('click', () => {
        ipname.style.display = "none";
        logIn.textContent = "login";
        clickCa.style.display = "block";
        clickEa.style.display = "none";
        submit.textContent = "Login";
    });


});

let Cakes = document.querySelectorAll(".Cakes");
let vegetarian = document.querySelectorAll(".vegetarian");
let Noodle = document.querySelectorAll(".Noodle");
let Sandwich = document.querySelectorAll(".Sandwich");
let Paste = document.querySelectorAll(".Paste");
let Roll = document.querySelectorAll(".Roll");
let Salad = document.querySelectorAll(".Salad");
let Desert = document.querySelectorAll(".Desert");
let dishName = document.querySelectorAll(".dish-name");
let sampleImg = document.querySelectorAll(".sample-img")
let menuParent = document.querySelectorAll(".menu-parent")
let check = "";

let dishes = [Cakes, vegetarian, Noodle, Sandwich, Paste, Roll, Salad, Desert];

sampleImg.forEach((sample) => {
    sample.addEventListener('click', () => {
        menuParent.forEach((menu) => {
            console.log(menu);
            menu.style.display = "block"
        });

    });
});


dishName.forEach((dish) => {
    dish.addEventListener('click', () => {
        check = dish.textContent.trim();  // Trim spaces to avoid comparison issues
        // console.log(check);

        dishes.forEach((dishlist) => {
            // console.log(dishlist);
            dishlist.forEach((item) => {
                // console.log(item);
                if (!item.classList.contains(check)) {
                    // console.log(check);
                    item.style.display = "none";
                } else {
                    item.style.display = "block"
                    // console.log(item);
                }

            });
        });
    });
});






