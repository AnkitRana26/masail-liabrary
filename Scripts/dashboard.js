console.log("hello")

var booklist = JSON.parse(localStorage.getItem("book-list")) ||[];

console.log(booklist.length)

display(booklist);
function display(booklist){

    document.querySelector("tbody").innerText="";
    document.getElementById("book-count").innerText=booklist.length;
    

    booklist.map(function (elem,index){

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
        td6.innerText ="Buy"
        td7.innerText ="Add";

        td6.addEventListener("click",function(){
            addtoMyBooks(index);
        })
        td7.addEventListener("click",function(){
            addtoBookmark(index);
        })
        td8.innerText =elem.price;

        td6.setAttribute("class","red")
        td7.setAttribute("class","green")

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        document.querySelector("tbody").append(tr);
        
        








    })










}



document.getElementById("filter").addEventListener("change",filterProducts);



function filterProducts(){
    
    var arr =[];
    if(document.getElementById("filter").value==""){
        arr=booklist;
    }else{
    arr = booklist.filter(function(elem){
        
        return elem.category===document.getElementById("filter").value;

    })
}

    display(arr);





}


function addtoMyBooks(index){
    var myBooks = JSON.parse(localStorage.getItem("buy-list")) || [];

    myBooks.push(booklist[index]);

    booklist.splice(index,1);

    localStorage.setItem("book-list",JSON.stringify(booklist));
    localStorage.setItem("buy-list",JSON.stringify(myBooks));

    var arr = JSON.parse(localStorage.getItem("book-list")) ||[];
    display(arr);


}

function addtoBookmark(index){
    var myBookmark= JSON.parse(localStorage.getItem("bookmark-list")) || [];

    myBookmark.push(booklist[index]);

    booklist.splice(index,1);

    localStorage.setItem("book-list",JSON.stringify(booklist));
    localStorage.setItem("bookmark-list",JSON.stringify(myBookmark));
    
    var arr = JSON.parse(localStorage.getItem("book-list")) ||[];
    display(arr);



}