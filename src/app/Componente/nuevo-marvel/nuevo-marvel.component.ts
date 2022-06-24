import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheroesService } from '../../Services/sheroes.service';
import { InterfHeroe } from '../../Shared/InterfHeroe';
import { ListarMarvelComponent } from '../listar-marvel/listar-marvel.component';


@Component({
  selector: 'app-nuevo-marvel',
  templateUrl: './nuevo-marvel.component.html',
  styleUrls: ['./nuevo-marvel.component.css']
})
export class NuevoMarvelComponent implements OnInit {
    
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
  public formulario!: FormGroup;
  
  @Output() OnClickCancelar:EventEmitter<boolean>=new EventEmitter();
  
  constructor( private heroeServicio: SheroesService,
    private formBuilder:FormBuilder,

    public listamarvel:ListarMarvelComponent ) {
    this.heroe.category='main';
    this.heroe.idAuthor='45';
    this.heroe.createdAt=new Date(Date.now());
    this.heroe.updatedAt=new Date(Date.now());
   }

  ngOnInit(): void {
  
  this.formulario=this.formBuilder.group({
    title:['',Validators.minLength(5)],
    body:['',Validators.required],
    image:['',Validators.required]
  })
}
  desactivarBanderaNuevoHeroe()
  {
    this.OnClickCancelar.emit(false);
  }
  guardarMarvel()
  {
    console.log(this.heroe)
    this.heroeServicio.agregarMarvel(this.heroe).subscribe(datosheroe=>{
      console.log("heroe guardado");
      this.actualizaListaMarvel();
    })
  }
  actualizaListaMarvel()
  {
    this.listamarvel.ObtieneMarvel();

  }

}
