import { Injectable } from "@angular/core";
import { NewTask } from "./new-task/new-task.model";
import { Task } from "./task/task.model";

// make it injectable , angular become aware of just service and can create instance
@Injectable({providedIn:'root'})
export class TasksService
{
  private Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ]

  getUserTasks(userId:string)
  {
    return this.Tasks.filter((task)=>task.userId===userId);
  }

  AddTask(taskData:NewTask,userId:string)
  {
    this.Tasks.push({
      id:new Date().getTime().toString(),
      title:taskData.title,
      dueDate:taskData.date,
      summary:taskData.summary,
      userId:userId
    });
  }

  RemoveTask(id:string)
  {
    this.Tasks=this.Tasks.filter((task)=>task.id!==id);

  }

}
