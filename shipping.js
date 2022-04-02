document.querySelector("form").addEventListener("submit",myfunction)
var arr= JSON.parse(localStorage.getItem("address")) || []


function myfunction(){
    event.preventDefault()
    var obj={
        firstname:document.querySelector("#FirstName").value,
         mobile:document.querySelector("#add-phone").value,
         country:document.querySelector("#Country").value,
         pincode :document.querySelector("#add-pincode").value,
         address:document.querySelector("#addaddress").value, 
         city:document.querySelector("#add-city").value,
         state:document.querySelector("#State").value
    }

arr.push(obj)
console.log(arr);
localStorage.setItem("address",JSON.stringify(arr))
};

// document.querySelector(".shpItemsMains")

// var shpItems=document.createElement("div");
// shpItems.setAttribute("class","shpItems");

// var img=document.createElement("img");
// img.scr="https://img.faballey.com/images/Product/TOP05298Z/1.jpg";

// shpItems.append(img);
// // document.querySelector(".shpItemsMains").append(shpItems);
