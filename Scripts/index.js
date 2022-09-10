console.log("helo");

var booklist = JSON.parse(localStorage.getItem("book-list")) ||[];

document.querySelector("form").addEventListener("submit",storeDetails);


function storeDetails(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var desc = document.getElementById("desc").value;
    var added = document.getElementById("added").value;
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;

    var obj ={
        name:name,
        author:author,
        desc:desc,
        added:added,
        category:category,
        price:price
    }

    document.getElementById("name").value="";
    document.getElementById("author").value="";
    document.getElementById("desc").value="";
    document.getElementById("added").value="";
    document.getElementById("category").value="";
    document.getElementById("price").value="";

    booklist.push(obj);

    localStorage.setItem("book-list",JSON.stringify(booklist));



}