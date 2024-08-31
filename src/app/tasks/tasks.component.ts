import { NewTask } from './new-task/new-task.model';
import { Component, Injectable, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) name?: string | undefined;
  isAddingTask = false;

  //dependency injection

  constructor(private tasksService:TasksService){
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.UserId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }


}
