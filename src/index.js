document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let subBut = document.getElementById("submit-button");
  // console.log(subBut)


  subBut.addEventListener("click", addTasks);



});

function addTasks(e) {
  e.preventDefault();
  let list = document.getElementById("tasks");
  let liTask = document.getElementById("new-task-description").value;
  let node = document.createElement("li");
  let delBut = document.createElement("button");
  let prio = document.getElementById("priority-dropdown").value;

  let hipri = [];
  let medpri = [];
  let lopri = [];


  // console.log(prio);

  if (prio === "high-priority") {

    node.classList.add("high-priority");
    
  } else if (prio === "medium-priority") {

    node.classList.add("medium-priority");
    
  } else if (prio === "low-priority") {

    node.classList.add("medium-priority");

  }

  // console.log(node);

  


  delBut.append("X");
  
  node.append(`${liTask} `);

  node.append(delBut);
  
  list.append(node);   
  
  
}
