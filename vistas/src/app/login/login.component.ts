import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.login();
  }

  respuesta: any[]

  login = () => {
    const register = {
      datos: [{
        persona_email: idcliente,
        persona_clave: idestado
    }]}

    this.http.post(environment.API_URL, register)
      .subscribe(data => {
        alert(data)
      })
      window.location.reload()
  }
}
