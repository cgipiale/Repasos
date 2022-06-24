import { Component, OnInit } from '@angular/core';
import { SheroesService } from '../../Services/sheroes.service';
import { ConstantesApp } from '../../../Utilities/constantes';
import {InterfHeroe} from '../../Shared/InterfHeroe'



@Component({
  selector: 'app-listar-marvel',
  templateUrl: './listar-marvel.component.html',
  styleUrls: ['./listar-marvel.component.css']
})
export class ListarMarvelComponent implements OnInit {
  heroesM:InterfHeroe[]=[];
  banderaNuevoHeroe: boolean=false;
  heroeBuscado: string='';
  banderaActualizaHeroe: boolean=false;

  

  constructor( 
    private ServicioHeroe:SheroesService
  ) { }
 
  ngOnInit(): void {
    this.ObtieneMarvel()
  }
  ObtieneMarvel(){
    //this.servicio.listarMarvel().subscribe((data:any[])=>this.heroes=Object.values(data))
    this.ServicioHeroe.listarMarvel().subscribe(datosheroe=>{
      this.heroesM=datosheroe;
    });
  }
  OcultarNuevoHeroe(desactivarBandera:boolean)
  {
    this.banderaNuevoHeroe= desactivarBandera;
  }
  ActivarNuevoHeroe()
  {
    this.banderaNuevoHeroe= true;
   
  }

  EliminarMarvel(idHeroe: string, nombreHeroe: string ,confirmacion:boolean)
  {
    console.log(idHeroe);
   confirmacion=confirm("Seguro de eliminar el heroe.."+ nombreHeroe)
    if (confirmacion)
    {
      this.ServicioHeroe.eliminarMarvel(idHeroe).subscribe(datosheroe=>
        {
          console.log("Marvel Eliminado");
          alert("Eroe eliminado...");
          this.ObtieneMarvel();
        } )
    }
  }
  buscarMarvel()
  {
    console.log(this.heroeBuscado);
    this.ServicioHeroe.buscarMarvel(this.heroeBuscado).subscribe(datosheroe=>{
      this.heroesM=datosheroe;
    })
  }
  OcultarActualizaHeroe(desactivarBandera:boolean)
  {
    this.banderaActualizaHeroe= desactivarBandera
  }
  ActivarActualizaHeroe(nombreHeroe:string )
  {
    this.banderaActualizaHeroe= true
    ConstantesApp.nombreHeroe=nombreHeroe
  }
}
