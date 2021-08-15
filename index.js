function pageLoad(){   
    alert("instruction! \n\nUse Chrome for best experience!\n\n1.Type your respective task in input box and click add button to store your tasks.\n2.Single Click : Send respective task to completed status! and restore to Active status!\n3.Double Click : Deleting task!\n\nThanks!");
    var oldData = JSON.parse(localStorage.getItem("key"));
    if (localStorage.getItem("key") != null){
        for (i=0; i<oldData.length; i++){
            var newElement = document.createElement('p');
            var newElementContainer = document.getElementById("taskContainer");
            newElement.setAttribute("class", "ready");
            newElement.setAttribute("id", oldData[i].id);
            newElement.addEventListener("click", taskHandle);
            newElement.addEventListener("dblclick", taskRemove);
            newElement.innerText = oldData[i].value, oldData[i].isCompleted, oldData[i].id;
            newElementContainer.appendChild(newElement);
            document.getElementById("userText").value = "";
            if (oldData[i].isCompleted == true){
                newElement.setAttribute("class", "ready completed");
            }            
        }
    }    
};
function addTask(){    
    var userInput = document.getElementById("userText").value;
    if (userInput == ""){
        return alert ("Please Enter Valid text");
    }
    if (userInput.replace(/[\s+]/g, "") == 0){
        return alert ("Please Enter Valid Text !");
    }
    var newElement = document.createElement('p');
    var newElementContainer = document.getElementById("taskContainer");
    if (localStorage.getItem("key") == null){
        localStorage.setItem("key", "[]");
    };
    var oldData = JSON.parse(localStorage.getItem("key"));
    var obj = {};
    obj.value = userInput;
    obj.isCompleted = false;
    obj.id = oldData.length+1;    
    oldData.push(obj);
    localStorage.setItem("key", JSON.stringify(oldData));
    newElement.setAttribute("class", "ready");
    newElement.setAttribute("id", obj.id);
    newElement.addEventListener("click", taskHandle);
    newElement.addEventListener("dblclick", taskRemove);
    newElement.innerText = userInput;
    newElementContainer.appendChild(newElement);
    document.getElementById("userText").value = "";
};
function enterTask(event){
    if (event.keyCode == 13){
        return addTask();
    }
};
function taskHandle(){
    this.classList.toggle("completed");
    var userT = this.id;
    var oldData = JSON.parse(localStorage.getItem("key"));
    for (i=0; i<oldData.length; i++){
        objData = oldData[i]
        if (userT == objData.id){
            objData.isCompleted = !objData.isCompleted;            
        }
        localStorage.setItem("key", JSON.stringify(oldData));
    }
};
function taskRemove(){
    this.remove();
    var userT1 = this.id;
    var oldData = JSON.parse(localStorage.getItem("key"));
    for (i=0; i<oldData.length; i++){
        objData1 = oldData[i]
        if (userT1 == objData1.id){
            oldData.splice(i,1);            
        }
        localStorage.setItem("key", JSON.stringify(oldData));
    }
};
