import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges,OnChanges  } from '@angular/core';
import { UserModel } from '../../../../../models/user.model';
import { FormGroup } from '@angular/forms';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-user-detail-pres',
  templateUrl: './admin-user-detail-pres.component.html',
  styleUrls: ['./admin-user-detail-pres.component.scss']
})
export class AdminUserDetailPresComponent implements OnInit, OnChanges {

  @Input() userModelDetail: UserModel;
  @Input() userDetailForm: FormGroup;
  @Output() userToSave = new EventEmitter<UserModel>();

  roles: Role[] = [
    { value: 'EMPLOYEE', viewValue: 'Empleado' },
    { value: 'PROVIDER', viewValue: 'Proveedor' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userModelDetail) {
      this.userDetailForm.patchValue(changes.userModelDetail.currentValue);
    } else {
      this.userDetailForm.reset();
    }
  }

  saveUser(user: UserModel): void {
    if (this.userModelDetail && this.userModelDetail.id) {
      user.id = this.userModelDetail.id;
    }
    this.userToSave.emit(user);
  }

}
