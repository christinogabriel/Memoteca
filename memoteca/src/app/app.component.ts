import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private toastr: ToastrService){}
  title = 'memoteca'
  usuarios= [
    {id:1,nome: 'Gabriel'},
    {id:2,nome: 'Joao'},
    {id:3,nome: 'Mc cartney'}
  ]
show
  logado: boolean= false;

}

