import Task from "./Task.js";
import UI from "./UI.js";

const ui = new UI();

ui.showTaskList();

document.querySelector(".AddTaskBtn").addEventListener("click",(e)=>{
    const taskTitle = document.querySelector("#newtaskID").value;
    if(taskTitle.length>0){
    const task=new Task(taskTitle);
    ui.addToUI(task);
    ui.reset();
    console.log(task);
    }
});

document.querySelector(".task-list").addEventListener("click",(e)=>{
    
    if(e.target.className.includes("task__op_delete")){
        ui.deleteTask(e);
    }

    
    if(e.target.className.includes("task-check")){
        ui.completeTask(e);
    }
    

    if(e.target.className.includes("task__op_edit")){
        ui.editTask(e);
    }
});



document.querySelector(".EditTaskBtn").addEventListener('click',(e)=>{
    ui.updateTask(e);
});



document.querySelector(".CancelTaskBtn").addEventListener("click",(e)=>{
    // ui.reset();
    ui.cancelTask(e);
});
