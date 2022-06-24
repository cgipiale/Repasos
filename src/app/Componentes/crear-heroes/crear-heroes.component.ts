import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SheroesService } from '../../Services/sheroes.service';
import { InterfHeroe } from '../../Shared/InterfHeroe';



@Component({
  selector: 'app-crear-heroes',
  templateUrl: './crear-heroes.component.html',
  styleUrls: ['./crear-heroes.component.css']
})
export class CrearHeroesComponent implements OnInit {

/*   heroe:InterfHeroe =new InterfHeroe(); */
  //personajes:any[]|undefined;
  constructor(private heroeServicio:SheroesService) 
  {
    /* this.heroe.category="main";
    this.heroe.createdAt=new Date(Date.now()).toISOString();
    this.heroe.updatedAt=new Date(Date.now()).toISOString();
    this.heroe.state ="default";*/
   }

  guardarHeroe(){
    /*this.heroeServicio.registrarHeroe(
      this.heroe.title,
      this.heroe.body,
      this.heroe.imagen,
      this.heroe.category,
      this.heroe.idAuthor,
      this.heroe.createdAt,
      this.heroe.updatedAt).subscribe((dato:any[])=>this.heroe()=Object.values(dato));
   *///// this._personajeservices.getusers().subscribe((data:any[])=> this.personajes=Object.values(data))
    console.log ("registrar");

  }
  
  //guardarHteroe(){
    //this.heroeServicio.registrarHeroe(this.heroe).subscribe(dato=> {
    //  this.listaHeroes.obtenerHeroes();
    //},error => console.log(error));
    
    //this.listaHeroes.mostrarRegistro(false);
    
  //}


  ngOnInit(): void {
    this.guardarHeroe
  }

}
function dato(dato: any): {} {
  throw new Error('Function not implemented.');
}

