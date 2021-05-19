import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public user:any;
  constructor() { 

    this.user ={
      nombre:'',
      apellido:'', 
      email:'',
      escri:''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Funciono");
    console.log(this.user);
  }

}
