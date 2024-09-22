let ctr = 1;
function deleteToDo(index){
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
}
function createToDo(){
    const InputField = document.querySelector("input");
    const InputValue = InputField.value.trim();

    if(InputValue=== ''){
        alert("Please Enter the Task");
        return;
    }
    const NewDiv = document.createElement("div");
    NewDiv.setAttribute("id","todo-"+ctr);
    NewDiv.innerHTML= "<div>" + InputValue + '</div><button onclick="deleteToDo(' +ctr+ ')" >Delete</button>'; 
    document.querySelector("body").appendChild(NewDiv);
    ctr += 1;
    InputField.value = '';
}

