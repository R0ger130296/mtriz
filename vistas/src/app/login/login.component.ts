import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
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
   
  }
  @ViewChild("persona_email") persona_email: ElementRef;
  @ViewChild("persona_clave") persona_clave: ElementRef;
  respuesta: any[]

  login = () => {
    const register = {
      datos: {
        persona_email:console.log(this.persona_email.nativeElement.innerHTML),
        persona_clave: this.persona_clave.nativeElement.innerHTML,
    }}
    this.http.post(environment.API_URL+`/login` , register)
      .subscribe(data => {
        alert(data)
      })
      // window.location.reload()
  }
}
