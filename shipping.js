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

window.location="payment.html"
};






