var payment = JSON.parse(localStorage.getItem("address")) ;
// console.log("payment");
payment.map(function (elem) {

    var addDiv = document.querySelector(".bigthree");
    var newdiv = document.querySelector(".bigthreefirst")

    var p1 = document.createElement("p");
    p1.innerText = elem.firstname;


    var p2 = document.createElement("p");
    p2.innerText = elem.mobile;

    var p3 = document.createElement("p");
    p3.innerText = elem.country;

    var p4 = document.createElement("p");
    p4.innerText = elem.pincode;

    var p5 = document.createElement("p");
    p5.innerText = elem.address;

    var p6 = document.createElement("p");
    p6.innerText = elem.city;

    var p7 = document.createElement("p");
    p7.innerText = elem.state
    newdiv.append(p1, p2, p3, p4, p5)


    addDiv.append(newdiv);

});
var cartdata = JSON.parse(localStorage.getItem("completedbag"))

var total = cartdata.reduce(function(sum,elem,index,arr){
    return sum+Number(elem.price);
 },0);
 document.querySelector("#subTotal").innerText=total;
 
 document.querySelector(".totlPrice").innerText=total;
