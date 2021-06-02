function Task(task){
    this.id= new Date().toLocaleString();
    this.isCompleted=false;
    this.title=task;
}

export default Task;