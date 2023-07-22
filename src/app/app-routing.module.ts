import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {CatsComponent} from "./components/cats/cats.component";
import {CatComponent} from "./components/cat/cat.component";
import {AutorComponent} from "./components/autor/autor.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'cat/:id',
    component: CatComponent
  },
  {
    path: 'autor',
    component: AutorComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
