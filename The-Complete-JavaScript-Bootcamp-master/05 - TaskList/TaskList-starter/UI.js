import LS from "./LS.js";
function UI(){}

const ls = new LS();

UI.prototype.addToUI= function (task){

    ls.addTaskToLS(task);

    let newHtml = `
    <div class="task" data-createdat="${task.id}">
        <div class="task__details">
          <input type="checkbox" class="task-check" />
          <label class="task-title">${task.title}</label>
        </div>

        <div class="task__op">
          <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
          <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
        </div>
    </div>
    `;

    document
        .querySelector(".task-list")
        .insertAdjacentHTML("afterbegin",newHtml);
};




UI.prototype.reset =  function (){
    document.querySelector("#newtaskID").value='';

};



UI.prototype.deleteTask = function (e) {

  const task = e.target.parentElement.parentElement;
  let id = task.dataset.createdat;
  ls.deleteTask(id);
  task.remove();
};


UI.prototype.completeTask = function (e) {
  const task = e.target.parentElement.parentElement;
  task.classList.toggle("completed");
  let id = task.dataset.createdat;
  ls.completeTask(id);
};


UI.prototype.showTaskList = function (){
  let tasks = ls.fetchTask();
  let newHtml = '';
  
  tasks.forEach((task)=>{
    newHtml += `
  <div class="task ${task.isCompleted ? 'completed' : ''}" data-createdat="${
      task.id
    }">
    <div class="task__details">
      <input type="checkbox" class="task-check" ${
        task.isCompleted ? 'checked' : ''
      }/>
      <label class="task-title">${task.title}</label>
    </div>

    <div class="task__op">
      <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
      <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
    </div>
  </div>
  `;
  });
  document.querySelector(".task-list").innerHTML = newHtml;
};






UI.prototype.editTask = function (e){

  const taskParent = e.target.parentElement.parentElement;
  const id = taskParent.dataset.createdat;
  
  let tasks = ls.fetchTask();
  let index = tasks.findIndex(task=> task.id===id);
  document.querySelector("#newtaskID").value=tasks[index].title;
  document.querySelector("#updateTaskId").value=tasks[index].id;

  document.querySelector(".AddTaskBtn").style.display="none";
  document.querySelector(".EditTaskBtn").style.display="inline";
  document.querySelector(".CancelTaskBtn").style.display="inline";
};


UI.prototype.updateTask = function  (e){
  let id=  document.querySelector("#updateTaskId").value;
  let title = document.querySelector("#newtaskID").value;
  ls.updateTaskToLS(id,title);
};



UI.prototype.cancelTask = function (e){
  this.reset();
  document.querySelector('#updateTaskId').value = '';

  document.querySelector('.AddTaskBtn').style.display = 'inline';
  document.querySelector('.EditTaskBtn').style.display = 'none';
  document.querySelector('.CancelTaskBtn').style.display = 'none';
};





export default UI;

