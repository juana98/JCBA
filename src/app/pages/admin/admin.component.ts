import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUser: UserModel;
  isCreateMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeCurrentUser(event: UserModel): void {
    this.currentUser = event;
    this.isCreateMode = false;
  }

  public closeDetail(): void {
    this.isCreateMode = false;
    this.currentUser = null;
  }

}
