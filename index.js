//delcare the variable

var plus = document.getElementById("pop-btn")
var pop = document.getElementById("pop")
var popbox = document.getElementById("popbox")

plus.addEventListener("click", function(){
    pop.style.display = "block"
    popbox.style.display = "block"
})

var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")

btn2.addEventListener("click",function(event){
    event.preventDefault()
    popbox.style.display = "none"
    pop.style.display = "none"
})
//clicking the add button to display the msg in popup

    var content = document.querySelector(".content")
    var container = document.getElementById("container")
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    var area = document.getElementById("pop-area")
    
btn1.addEventListener("click",function(event){
    event.preventDefault()
    popbox.style.display = "none"
    pop.style.display = "none"

    var div = document.createElement("div")
    div.setAttribute("class","container")

    div.innerHTML = `<h2>${input1.value}</h2>
    <h4>${input2.value}</h4>
    <p>${area.value}</p>
    <button id="btn" onclick="delbutton(event)">Delete<button`
    content.appendChild(div)

    



    input1.value = ""
    input2.value = ""
    area.value = ""

})
//deleting the content after the display it bu delete button

function delbutton(event){
    event.target.parentElement.remove()
}

