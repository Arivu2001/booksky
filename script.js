var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.querySelector(".addbutton")

addbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}) 

var cancelbutton =document.querySelector(".cancel-book")
cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
        popupbox.style.display="none"
            popupoverlay.style.display="none"

})

var second = document.querySelector(".second")
var addbook = document.querySelector(".add-book")
var bookname = document.getElementById("book-name")
var author = document.getElementById("author")
var description = document.getElementById("description")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "third")
    div.innerHTML = `<h2>${bookname.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
        <button onclick="update(event)">Delete</button>`
        second.append(div)
         popupbox.style.display="none"
            popupoverlay.style.display="none"
})
function update(event)
{
    event.target.parentElement.remove()
}
