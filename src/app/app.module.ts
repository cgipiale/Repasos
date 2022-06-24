import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditarHeroesComponent } from './Componentes/editar-heroes/editar-heroes.component';
import { CrearHeroesComponent } from './Componentes/crear-heroes/crear-heroes.component';
import { ListadoHeroesComponent } from './Componentes/listado-heroes/listado-heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarMarvelComponent } from './Componente/listar-marvel/listar-marvel.component';
import { NuevoMarvelComponent } from './Componente/nuevo-marvel/nuevo-marvel.component';
import { ActualizaMarvelComponent } from './Componente/actualiza-marvel/actualiza-marvel.component';


@NgModule({
  declarations: [
    AppComponent,
    EditarHeroesComponent,
    CrearHeroesComponent,
    ListadoHeroesComponent,
    ListarMarvelComponent,
    NuevoMarvelComponent,
    ActualizaMarvelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,   /// no olvidarse 
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
