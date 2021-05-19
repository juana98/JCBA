import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../../../../models/user.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-user-detail-cont',
  templateUrl: './admin-user-detail-cont.component.html',
  styleUrls: ['./admin-user-detail-cont.component.scss']
})
export class AdminUserDetailContComponent implements OnInit {

  userDetailForm: FormGroup;

  @Input() userModelDetail: UserModel;
  @Output() currentUser = new EventEmitter<UserModel>();
  @Output() closeAction = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userDetailForm = this.fb.group({
      idUser: [0,Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['',Validators.required],
      email: [''],
    });
  }

  ngOnInit(): void {
  }

  saveUser(user: UserModel): void {
    this.userService.saveUser(user).subscribe((data) => {
      this.closeAction.emit(true);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3000,
      });
    });
  }

}
