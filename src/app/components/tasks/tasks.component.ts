import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listTasks: Task[] = [];
  nameTask = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.nameTask)
    //crear un obj tarea
    const task: Task = {
        name: this.nameTask,
        status: false
    }

    //agregar el obj tarea al array
    this.listTasks.push(task);

    //reset form
    this.nameTask = '';
  }

  updateTask(task: Task, index: number) {
    this.listTasks[index].status = !task.status;
  }

  deleteTask(index: number): void {
    this.listTasks.splice(index, 1);
  }

}
