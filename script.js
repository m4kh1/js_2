var inVal = document.querySelector("input[type='text']");
var b = document.querySelector("button");
var listFinal = document.querySelector("#todoList");
var listArr = [];

function getItem(){
    if(inVal.Value.length > 0){
        listArr.push(inVal.value);
    }
    renderList();

    inVal.value = "";
}

function renderList(){
    listFinal.innerHTML

    for(let item of listArr){
        listFinal.innerHTML += `<li>${item}</li>`;
    }
}

b.addEventListener("click", getItem);