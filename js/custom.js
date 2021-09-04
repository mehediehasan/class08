const login = () => {
    const name = document.getElementById("userName").value;
    document.getElementById("userWCName").innerHTML = name;

    document.getElementById("logintitle").style.display = "none";
    document.getElementById("login").style.display = "none";

}



const buy1 = () => {

    const product = document.getElementById("title1").value;
    const details = document.getElementById("details1").value;
    const price = document.getElementById("price1").value;

    document.getElementById("welcomeUser").style.display = "none";
    document.getElementById("products").style.display = "none";

}