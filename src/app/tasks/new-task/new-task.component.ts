import { Component, Output,EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output()close=new EventEmitter<void>();
  enteredTitle= '';
  enteredSummary='';
  enteredDate='';

  // constructor(private tasksService:TasksService){}
  private tasksService=inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.AddTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId);
    this.close.emit();
  }
}

