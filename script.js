var bagData=JSON.parse(localStorage.getItem("completedbag"));
console.log(bagData);

bagData.map(function(elem){

    var name1=document.querySelector(".plink");
    name1.innerText = elem.name;
    

    
})