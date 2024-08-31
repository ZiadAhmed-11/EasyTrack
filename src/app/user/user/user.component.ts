import { Component,computed,input,Input,Output,output,EventEmitter} from '@angular/core';
import { type User } from './user.model';

// type User={
//   id:string;
//   name:string;
//   avatar:string;
// };



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required:true} ) avatar!:string;
  // @Input({required:true} ) name!:string;

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter<string>();


  // id=input.required<string>();
  // avatar=input.required<string>();
  // name=input.required<string>();

  // select=output<string>();

  // imagePath=computed(()=>
  //   'assets/users/'+ this.avatar());

  get imagePath()
  {
    return 'assets/users/'+ this.user.avatar
  }

  onSelectUser()
  {
    this.select.emit(this.user.id);
  }
}
