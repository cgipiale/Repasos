import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { SheroesService } from '../../Services/sheroes.service';
import { InterfHeroe } from '../../Shared/InterfHeroe';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {
  heroes:InterfHeroe[]=[];

  constructor(private servicio:SheroesService) { }
  //private servicio:SheroesService , private routers:Router
  Crear(){
     console.log( "crear prsonaja");
    
    //this.routers.navigate(["crear"]);
  }
  Editar(){
   // this.routers.navigate(["editar"]);
  }
  BuscarHeroe(){
    //this.servicio.listarMarvel().subscribe((data:any[])=>this.heroes=Object.values(data))
    this.servicio.listarMarvel().subscribe(datosheroe=>{
      this.heroes=datosheroe;
    });
  }

  ngOnInit(): void {
  
  this.BuscarHeroe();


  }
}
