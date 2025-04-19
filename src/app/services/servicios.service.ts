import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  crearContacto(datos: any, datosCorreo:any): Observable<any> {
    const body = JSON.stringify({datosRegistro:datos, datosCorreo});
    console.log(body);
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${environment.APIS.URL_BACK}/crear-contacto`, body, {headers});
  }
}
