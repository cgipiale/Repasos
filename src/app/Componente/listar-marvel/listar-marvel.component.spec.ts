import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InterfHeroe } from '../../Shared/InterfHeroe';
import {SheroesService} from '../../Services/sheroes.service'

import { ListarMarvelComponent } from './listar-marvel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const heroe: InterfHeroe = {
  _id: "629666fbb889b529681fc838",
  title: "Thor",
  body: "Thor Odinsons wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
  image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg",
  category: "main",
  idAuthor: "24",
  createdAt: new Date(),
  updatedAt: new Date()
};
const idHeroe="629666fbb889b529681fc838", nombreHeroe="Thor"
const bandera=false
const heroes: InterfHeroe[] = [heroe];
const ServiceHeroeMock = {
  listarMarvel: () => of(heroes),
  buscarMarvel: () => of(heroes),
  eliminarMarvel:() => of()
}
describe('ListarMarvelComponent', () => {
  let component: ListarMarvelComponent;
  let fixture: ComponentFixture<ListarMarvelComponent>;
  let serviceHeroe: SheroesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMarvelComponent ],
      imports: [ HttpClientTestingModule],
      providers: [
        {provide:SheroesService,
        useValue:ServiceHeroeMock}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]   
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceHeroe = fixture.debugElement.injector.get(SheroesService);
  });

  test('Validar la creacion del componete ListaMarvel', () => {
    expect(component).toBeTruthy();
  });

  test('validar metodo obtenerHeroes', () => {
    component.ObtieneMarvel();
    expect(component.ObtieneMarvel.length).toBe(0);   
  });

  test('validar metodo OcultarNuevoHeroe', () => {
   
    component.OcultarNuevoHeroe(bandera);
    expect(component.OcultarNuevoHeroe.length).toBe(1);   
  });

  test('validar metodo ActivarNuevoHeroe', () => {
   
    component.ActivarNuevoHeroe();
    expect(component.ActivarNuevoHeroe.length).toBe(0);   
  });

  test('validar metodo EliminarMarvel', () => {
   
    component.EliminarMarvel(idHeroe,nombreHeroe,false);
    expect(component.EliminarMarvel.length).toBe(3);   
  });

  test('validar metodo buscarMarvel', () => {   
    component.buscarMarvel();
    expect(component.buscarMarvel.length).toBe(0);   
  });

  test('validar metodo OcultarActualizaHeroe', () => {   
    component.OcultarActualizaHeroe(bandera);
    expect(component.OcultarActualizaHeroe.length).toBe(1);   
  });

  test('validar metodo ActivarActualizaHeroe', () => {   
    component.ActivarActualizaHeroe(nombreHeroe);
    expect(component.ActivarActualizaHeroe.length).toBe(1);   
  });
});
