import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InterfHeroe } from '../Shared/InterfHeroe';

import { ConstantesApp } from '../../Utilities/constantes';

@Injectable({
  providedIn: 'root'
})
export class SheroesService {
   urlApi=ConstantesApp.UrlApp /* 'https://bp-marvel-api.herokuapp.com/marvel-characters'; */
   idAuthor = ConstantesApp.idAuthor
   
   urlApiget='https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=45';
  
  constructor(
    private httpCliente: HttpClient ) 
  { }
  
   
   listarMarvel():Observable <InterfHeroe[]>{
     return this.httpCliente.get<InterfHeroe[]>(`${this.urlApi}?idAuthor=${this.idAuthor}`)

   }
   buscarMarvel(titulo:string):Observable <InterfHeroe[]>{
    return this.httpCliente.get<InterfHeroe[]>(`${this.urlApi}?idAuthor=${this.idAuthor}&title=${titulo}`)
   }
   agregarMarvel(interheroe:InterfHeroe):Observable <object>{
    return this.httpCliente.post(`${this.urlApi}?idAuthor=${this.idAuthor}`,interheroe)
   }
   editarMarvel(interheroe:InterfHeroe,idHeroe:string):Observable <object>{
      return this.httpCliente.put(`${this.urlApi}/${idHeroe}?idAuthor=${this.idAuthor}`,interheroe)
   }
   eliminarMarvel(idHeroe:string):Observable <object>{
    return this.httpCliente.delete(`${this.urlApi}/${idHeroe}?idAuthor=${this.idAuthor}`)
    
   }

     
   


}
