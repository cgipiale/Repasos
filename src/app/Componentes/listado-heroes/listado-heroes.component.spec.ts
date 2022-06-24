import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheroesService } from '../../Services/sheroes.service';
import { ListadoHeroesComponent } from './listado-heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InterfHeroe } from '../../Shared/InterfHeroe';
import {of} from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const heroe: InterfHeroe = {
  _id: "629666fbb889b529681fc838",
  title: "Thor",
  body: "Thor Odinsons wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
  image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg",
  category: "main",
  idAuthor: '24',
  createdAt:  new Date(),
  updatedAt: new Date()
};
const heroes: InterfHeroe[] = [heroe];
const ServiceHeroeMock = {
  listarMarvel: () => of(heroes)
  
}
describe('ListadoHeroesComponent', () => {
  let component: ListadoHeroesComponent;
  let fixture: ComponentFixture<ListadoHeroesComponent>;
  let serviceHeroe: SheroesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHeroesComponent ],
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
    fixture = TestBed.createComponent(ListadoHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceHeroe = fixture.debugElement.injector.get(SheroesService);

  });

  
  test('validar metodo obtenerHeroes', () => {
    component.BuscarHeroe();
    expect(component.BuscarHeroe.length).toBe(0);   
  });
  
});
