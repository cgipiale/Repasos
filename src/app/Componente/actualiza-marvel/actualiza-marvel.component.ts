import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SheroesService } from '../../Services/sheroes.service';
import { InterfHeroe } from '../../Shared/InterfHeroe';
import { ConstantesApp } from '../../../Utilities/constantes';
import { ListarMarvelComponent } from '../listar-marvel/listar-marvel.component';

@Component({
  selector: 'app-actualiza-marvel',
  templateUrl: './actualiza-marvel.component.html',
  styleUrls: ['./actualiza-marvel.component.css']
})
export class ActualizaMarvelComponent implements OnInit {
  heroe:InterfHeroe =
  {
    title: '',
    body: '' ,
    image: '' ,
    category: '' ,
    idAuthor: '' ,
    createdAt: new Date(),
    updatedAt:  new Date
  }
  @Output() OnClickCancelActualizar:EventEmitter<boolean>=new EventEmitter();
  
  constructor(private heroeServicio:SheroesService , public listamarvel:ListarMarvelComponent ) { }

  ngOnInit(): void {
    this.mostrardatosMarvelActual()
  }
  mostrardatosMarvelActual(){
    this.heroeServicio.buscarMarvel(ConstantesApp.nombreHeroe).subscribe(datosheroe=>{
      this.heroe.title=datosheroe[0].title
      this.heroe.body=datosheroe[0].body
      this.heroe.image=datosheroe[0].image
      this.heroe._id=datosheroe[0]._id
      this.heroe.category=datosheroe[0].category
      this.heroe.idAuthor=datosheroe[0].idAuthor
      this.heroe.createdAt=datosheroe[0].createdAt
      this.heroe.updatedAt=datosheroe[0].updatedAt
    })
  }
  
  actualizarMarvel()
  {
    console.log(this.heroe)
    this.heroeServicio.editarMarvel(this.heroe,this.heroe._id!).subscribe(datosheroe=>{
     /*  this.heroeServicio.listarMarvel(); */
      this.listamarvel.ObtieneMarvel()
      alert("Heroe Actualizado")
            
    })
  }
  desactivarActualizaHeroe()
  {
    console.log("Actualiza heroe");
    this.OnClickCancelActualizar.emit(false);
  }
  
}
