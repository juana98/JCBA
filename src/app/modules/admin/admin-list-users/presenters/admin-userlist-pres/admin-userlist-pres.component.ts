import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-userlist-pres',
  templateUrl: './admin-userlist-pres.component.html',
  styleUrls: ['./admin-userlist-pres.component.scss']
})
export class AdminUserlistPresComponent implements OnInit {
  @Input() public users: UserModel[];
  @Output() userToEdit = new EventEmitter<UserModel>();
  @Output() userToDelete = new EventEmitter<string>();
  displayedColumns: string[] = ['idUser','name', 'username','role','email','edit'];

  constructor() {}

  ngOnInit(): void {}

  setEdit(user: UserModel): void {
    this.userToEdit.emit(user);
  }

  removeUser(user: UserModel): void {
    this.userToDelete.emit(user.id);
  }
}
