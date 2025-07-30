const inputArea = document.getElementById("InputArea");
const Listcontainer = document.getElementById("List-container");

function addtask() {
    if (inputArea.value === '') {
        alert("You Must Write Somthing")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputArea.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        Listcontainer.scrollTo({ top: Listcontainer.scrollHeight, behavior: "smooth" })
    }
    inputArea.value = '';
    saveData();

}
inputArea.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addtask();
    }

});

Listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName = "SPAN")
        e.target.parentElement.remove();
    saveData();
});


function saveData() {
    localStorage.setItem("data", Listcontainer.innerHTML)
}

function showdata() {
    Listcontainer.innerHTML = localStorage.getItem("data")
}
showdata();
