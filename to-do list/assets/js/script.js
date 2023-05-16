const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorNodes = document.querySelectorAll(".error");

// error-border

function validateForm() {

    let errorFlag = false;

    if(inputBox.value.length < 1) {
        errorNodes[0].innerText = "Text cannot be blank";
        inputBox.classList.add("error-border");
        errorFlag = true;
    }
}

// alert message
 
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();