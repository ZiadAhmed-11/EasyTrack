import { Component, Input , inject} from '@angular/core';
import { Task } from './task.model';
import {DatePipe} from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  private tasksService=inject(TasksService);
  onCompleteTask(){
    this.tasksService.RemoveTask(this.task.id);
  }
}
