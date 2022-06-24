import { Component, NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { CrearHeroesComponent } from './Componentes/crear-heroes/crear-heroes.component';
import { EditarHeroesComponent } from './Componentes/editar-heroes/editar-heroes.component';
import { ListadoHeroesComponent } from './Componentes/listado-heroes/listado-heroes.component';

const routers:Routes=[
    {path: 'listar',component:ListadoHeroesComponent},
    {path: 'crear',component:CrearHeroesComponent},
    {path: 'editar',component:EditarHeroesComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule]
})
export class AppRoutingModule { }