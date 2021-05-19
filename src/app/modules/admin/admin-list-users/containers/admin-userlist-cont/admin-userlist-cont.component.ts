import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-userlist-cont',
  templateUrl: './admin-userlist-cont.component.html',
  styleUrls: ['./admin-userlist-cont.component.scss']
})
export class AdminUserlistContComponent implements OnInit {
 
  public userEntry$: Observable<UserModel[]>;
  @Output() userToEdit = new EventEmitter<UserModel>();
  @Output() userToDelete = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userEntry$ = this.userService.getUsers();
  }

  sendUserToEdit(event: UserModel): void {
    this.userToEdit.emit(event);
  }

  deleteUserToList(event: string): void {
    this.userToDelete.emit(event);
  }

  deleteUser(user: UserModel): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser(user).subscribe((data) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }

}
