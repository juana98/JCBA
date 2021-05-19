import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserlistContComponent } from './admin-list-users/containers/admin-userlist-cont/admin-userlist-cont.component';
import { AdminUserlistPresComponent } from './admin-list-users/presenters/admin-userlist-pres/admin-userlist-pres.component';
import { AdminUserDetailContComponent } from './admin-user-detail/containers/admin-user-detail-cont/admin-user-detail-cont.component';
import { AdminUserDetailPresComponent } from './admin-user-detail/presenters/admin-user-detail-pres/admin-user-detail-pres.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AdminUserlistContComponent,
    AdminUserlistPresComponent,
    AdminUserDetailContComponent,
    AdminUserDetailPresComponent
  ],
  imports: [ CommonModule, SweetAlert2Module.forRoot(), SharedModule ],
  exports: [
      AdminUserlistContComponent,
      AdminUserlistPresComponent,
      AdminUserDetailContComponent,
      AdminUserDetailPresComponent
    ],
})
export class AdminModule { }
