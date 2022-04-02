var cartdata = JSON.parse(localStorage.getItem("completedbag"))

cartdata.map(function (elem) {
   var container = document.querySelector(".bagLeftcntr")
   var box = document.createElement("div")
   // box.style = "display:grid"
   box.setAttribute("class", "box")

   var divone = document.createElement("div")
   divone.setAttribute("class", "divone")

   var havetwo= document.createElement("div")
   havetwo.setAttribute("class","havetwo")


   var divtwo = document.createElement("div")
   // divtwo.style = "margin-left:30px;display:flex;border:1px solid blue;width:75%"
   divtwo.setAttribute("class", "divtwo")

   var img = document.createElement("img")
   img.src = elem.image_url
   img.style = "height:150px;width:100px"

   var heading = document.createElement("h3")
   heading.innerText = elem.name

   var price = document.createElement("h4")
   price.innerText = elem.price

   var details = document.createElement("div")
   details.setAttribute("class","details")
   var para = document.createElement("p")
   para.innerText = "Pick this breezy  dress for a day out with your girl gang. Tailored in a fetching floral print, it comes with a ruched detail in front and a sexy strappy neck it can be used as daily wear and parties as well."
   details.append(para)

   var anchor=document.createElement("li")
   anchor.innerText="Edit Item"
   anchor.setAttribute("class","anchor")
   
   var anchortwo=document.createElement("li")
   anchortwo.innerText="Move To Wishlist"
   anchortwo.setAttribute("class","anchor")

   var last=document.createElement("div")
   last.setAttribute("class","last")
   
   var lastanchorone=document.createElement("a")
   lastanchorone.innerText=" < Continue Shopping"
   var lastanchortwo=document.createElement("a")
   lastanchortwo.innerText="Add To Wishlist"

   last.append(lastanchorone,lastanchortwo)
   // var bagmain=document.querySelector(".ulbagMain")
   // bagmain.append(last)

   havetwo.append(divtwo,details,anchor,anchortwo)


   divone.append(img)
   divtwo.append(heading, price)


   box.append(divone, havetwo)
   container.append(box,last)
})