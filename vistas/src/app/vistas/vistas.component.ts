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
    this.getDataNotas();
  }

  respuesta: any[]

  getData = () => {
    let tabla = 'persona'
    this.http.get<any>(environment.API_URL+`/matrizWhere` + `?tabla=${tabla}`+'&&where=2')
      .subscribe(data => {
        this.respuesta = data.datos
        console.log(this.respuesta)
      })
  }
  respuestaNotas: any[]
  getDataNotas = () => {
    let tabla = 'nota'
    this.http.get<any>(environment.API_URL+`/matriz` + `?tabla=${tabla}`)
      .subscribe(data => {
        this.respuestaNotas = data.datos
        console.log(this.respuestaNotas)
      })
  }

  // postDataTable = () => {
  //   let tabla = 'ordenes'
  //   let register = {tabla: tabla, datos: [{id: this.id, fecha_orden: this.fecha_orden, idclientes: this.idclientes}]}
  //   this.http.post(environment.API_URL, register)
  //   .subscribe( data => {
  //     // this.postData = data
  //   })
  //   window.location.reload()
  // }
}

