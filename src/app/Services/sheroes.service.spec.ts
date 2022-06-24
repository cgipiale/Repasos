import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ConstantesApp } from '../../Utilities/constantes';
import { InterfHeroe } from '../Shared/InterfHeroe';

import { SheroesService } from './sheroes.service';

const heroe:InterfHeroe={
  
    _id: "62aa2fcad15105c637442e50",
    title: "Captain America",
    body: "America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg",
    category: "main",
    idAuthor: "45",
    createdAt: new Date(),
    updatedAt: new Date(),
}
const urlApi:string=ConstantesApp.UrlApp
const idAuthor:string=ConstantesApp.idAuthor

const heroes: InterfHeroe[]=[heroe];

describe('SheroesService', () => {
  let service: SheroesService;
  let httpMock:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SheroesService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    });
    /* service = TestBed.inject(SheroesService); */
  });

  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheroesService);
    httpMock=TestBed.inject(HttpTestingController);
  })

  afterEach(()=>{
    httpMock.verify();
  })

  it('Varifica creación servicio SheroesService', () => {
    expect(service).toBeTruthy();
  });
  it('prueba metodo obtenerListaHeroes',()=>{
    service.listarMarvel().subscribe((resp:InterfHeroe[])=>{
      expect(resp).toEqual(heroes);
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('GET');
    resq.flush(heroes);
  })

  it('prueba metodo obtenerListaHeroes',()=>{
    let title="Captain America"
    service.buscarMarvel(title).subscribe((resp:InterfHeroe[])=>{
      expect(resp).toEqual(heroes);
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}?idAuthor=${idAuthor}&title=${title}`);
    expect(resq.request.method).toBe('GET');
    resq.flush(heroes);
  })

  it('prueba metodo AgregarListaHeroes',()=>{
    
    service.agregarMarvel(heroe).subscribe((resp)=>{
      expect(resp).toEqual("Nuevo personaje agregado!");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('POST');
    resq.flush(heroes);
  })
  it('prueba metodo EditarListaHeroes',()=>{
    let idHeroe="62aa2fcad15105c637442e50"
    service.editarMarvel(heroe,idHeroe).subscribe((resp)=>{
      expect(resp).toEqual("Personaje actualizado");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}/${idHeroe}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('PUT');
    resq.flush(heroes);
  })

  it('prueba metodo EliminarHeroes',()=>{
    let idHeroe="62aa2fcad15105c637442e50"
    service.eliminarMarvel(idHeroe).subscribe((resp)=>{
      expect(resp).toEqual("Personaje actualizado");
    });
    //inicializa el mock
    const resq=httpMock.expectOne(`${urlApi}/${idHeroe}?idAuthor=${idAuthor}`);
    expect(resq.request.method).toBe('DELETE');
    resq.flush(heroes);
  })

});
