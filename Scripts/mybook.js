console.log("hello")

var buylist = JSON.parse(localStorage.getItem("buy-list")) ||[];

console.log(buylist.length)

display(buylist);
function display(buylist){

    document.querySelector("tbody").innerText="";
    
    

    buylist.map(function (elem,index){

        var tr = document.createElement("tr");
        var td1 =document.createElement("td");
        var td2 =document.createElement("td");
        var td3 =document.createElement("td");
        var td4 =document.createElement("td");
        var td5 =document.createElement("td");
        var td6 =document.createElement("td");
        var td7 =document.createElement("td");
        var td8 =document.createElement("td");


        td1.innerText =elem.name;
        td2.innerText =elem.author;
        td3.innerText =elem.desc;
        td4.innerText =elem.added;
        td5.innerText =elem.category;


        td8.innerText =elem.price;


        tr.append(td1,td2,td3,td4,td5,td8)
        document.querySelector("tbody").append(tr);
        
        








    })










}
