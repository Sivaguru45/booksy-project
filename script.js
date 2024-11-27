
var d=document.querySelector(".book1")
function del()
{
    d.style.display="none"
}


var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")

function p()
{
    overlay.style.display="block"
    popup.style.display="block"
    value1.value=null
    value2.value=null
    value3.value=null

}

function cancel(event)
{
    overlay.style.display="none"
    popup.style.display="none"
    event.preventDefault()
    
}

var book = document.querySelector(".container")
var value1 = document.querySelector(".title")
var value2 = document.querySelector(".author")
var value3 = document.querySelector(".Description")
var butt= document.querySelector(".btn3")

butt.addEventListener("click" ,function(event){
    event.preventDefault()
    var div=document.createElement("div")
   
    div.setAttribute("class","book1")
    div.innerHTML=`<h2 style="color: lightgreen;">${value1.value}</h2>
    <h5>${value2.value}</h5>
       
        <br><p>${value3.value}</p>
        <br> <button class="btn" style="background-color: lightgreen;" onclick="event.target.parentElement.remove()"> delete </button>`
        book.append(div)
        overlay.style.display="none"
        popup.style.display="none"
        





})

/*var clear = document.querySelector(".clr")

clear.addEventListener("click", function(event){sq
    value1.value=null
    value2.value=null
    value3.value=null

})*/




 
