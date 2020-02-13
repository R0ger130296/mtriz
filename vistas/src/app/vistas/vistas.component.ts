import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  respuesta: any[]

  getData = () => {
    let tabla = 'persona'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
            console.log(this.respuesta)
        })
  }

}

