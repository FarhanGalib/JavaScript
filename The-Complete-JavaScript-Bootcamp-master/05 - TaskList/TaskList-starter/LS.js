function LS (){}

LS.prototype.fetchTask = function () {
    let tasks = localStorage.getItem("tasks");
    if(tasks){
        tasks = JSON.parse(tasks);
    }
    else{
        tasks = [];
    }
    return tasks;
};


LS.prototype.addTaskToLS = function (task) {
    let tasks=this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
};

LS.prototype.deleteTask = function (id){
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task)=>task.id===id);
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


LS.prototype.completeTask = function (id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id===id);
    tasks[index].isCompleted =! tasks[index].isCompleted ;
    localStorage.setItem("tasks",JSON.stringify(tasks));
};




LS.prototype.updateTaskToLS = function (id,title) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id=== id);
    tasks[index].title=title;
    localStorage.setItem("tasks",JSON.stringify(tasks));

    document.querySelector(".task-title").innerText=title;

}

export default LS;