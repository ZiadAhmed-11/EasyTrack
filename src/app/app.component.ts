import { HeaderComponent } from './header/Header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp2';
  users=DUMMY_USERS
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId=id;
  }
}
