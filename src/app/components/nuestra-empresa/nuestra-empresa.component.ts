import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogModel } from 'src/app/models/user-log.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { routing } from '../../app.routing';

@Component({
  selector: 'app-nuestra-empresa',
  templateUrl: './nuestra-empresa.component.html',
  styleUrls: ['./nuestra-empresa.component.scss'],
  providers: [UserService]
})
export class NuestraEmpresaComponent implements OnInit, OnChanges {
  public title: string;
  @Input() userModel: UserLogModel;
  @Input() userForm: FormGroup;
  @Output() userToLog = new EventEmitter<UserLogModel>();
  @Output() closeAction = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder, 
    private _userService: UserService, 
    private router: Router
    ) { 
    
    this.title = "PRODUCCIÓN, COMERCIALIZACIÓN Y TRANSPORTE DE MINERAL CARBÓN";
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userModel) {
      this.userForm.patchValue(changes.userModel.currentValue);
    } else {
      this.userForm.reset();
    }
  }

  login(user: UserLogModel): void{
    if (this.userModel && this.userModel.username) {
      user.username = this.userModel.username;
    }
    this.userToLog.emit(user);
    this._userService.login(user).subscribe((data)=>{
      this.closeAction.emit(true);
      this.router.navigateByUrl('/admin');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso exitoso',
        showConfirmButton: false,
        timer: 3000,
      });
    });
  }
  // myComponent.component.thml
  /*btnClick= function () {
    if (this.userModel && this.userModel.username) {
          this.router.navigateByUrl('/admin');
    }
  };*/
  /*redireccion(){
    this._router.navigate(['./admin']);
    }*/


}
