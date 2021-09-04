document.getElementById("welcomeUser").style.display = "none";
document.getElementById("products").style.display = "none";
document.getElementById("cart").style.display = "none";
document.getElementById("cart_item").style.display = "none";
document.getElementById("finishMsg").style.display = "none";

const login = () => {
    window.event.preventDefault();
    const name = document.getElementById("userName").value;
    document.getElementById("userWCName").innerHTML = name;

    document.getElementById("logintitle").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById("welcomeUser").style.display = "block";
    document.getElementById("products").style.display = "block";

}



const buy1 = () => {


    const product = document.getElementById("title1").innerHTML;
    const details = document.getElementById("details1").innerHTML;
    const price = document.getElementById("price1").innerHTML;
    const imgUrl = document.getElementById("product_img_1").src;


    document.getElementById("cartTotal").innerHTML = price;
    document.getElementById("cartImg").src = imgUrl;
    document.getElementById("cartTitle").innerHTML = product;
    document.getElementById("cartDetails").innerHTML = details;
    document.getElementById("cartPrice").innerHTML = price;


    document.getElementById("welcomeUser").style.display = "none";
    document.getElementById("products").style.display = "none";

    document.getElementById("cart").style.display = "block";
    document.getElementById("cart_item").style.display = "block";

}


const buy2 = () => {


    const product = document.getElementById("title2").innerHTML;
    const details = document.getElementById("details2").innerHTML;
    const price = document.getElementById("price2").innerHTML;
    const imgUrl = document.getElementById("product_img_2").src;


    document.getElementById("cartTotal").innerHTML = price;
    document.getElementById("cartImg").src = imgUrl;
    document.getElementById("cartTitle").innerHTML = product;
    document.getElementById("cartDetails").innerHTML = details;
    document.getElementById("cartPrice").innerHTML = price;


    document.getElementById("welcomeUser").style.display = "none";
    document.getElementById("products").style.display = "none";

    document.getElementById("cart").style.display = "block";
    document.getElementById("cart_item").style.display = "block";

}


const buy3 = () => {


    const product = document.getElementById("title3").innerHTML;
    const details = document.getElementById("details3").innerHTML;
    const price = document.getElementById("price3").innerHTML;
    const imgUrl = document.getElementById("product_img_3").src;


    document.getElementById("cartTotal").innerHTML = price;
    document.getElementById("cartImg").src = imgUrl;
    document.getElementById("cartTitle").innerHTML = product;
    document.getElementById("cartDetails").innerHTML = details;
    document.getElementById("cartPrice").innerHTML = price;


    document.getElementById("welcomeUser").style.display = "none";
    document.getElementById("products").style.display = "none";

    document.getElementById("cart").style.display = "block";
    document.getElementById("cart_item").style.display = "block";

}


const finishMsg = () => {
    document.getElementById("cart").style.display = "none";
    document.getElementById("cart_item").style.display = "none";
    document.getElementById("finishMsg").style.display = "block";

}