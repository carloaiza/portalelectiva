import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  autenticar()
  {
    console.log('autenticando')
    //this.loginService.autenticarService('Carloaiza')
    
    
    this.loginService.obtenerProductos().subscribe(dataFinal => {
     console.log(dataFinal)
     
    },
      error => {
        console.log(error)
        
      });

  }

}
