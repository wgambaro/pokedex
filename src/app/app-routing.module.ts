import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtributosPokemonComponent } from './atributos-pokemon/atributos-pokemon.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';

const routes: Routes = [
  { path: 'ListarPokemon', component: ListarPokemonComponent },

  { path: 'AtributosPokemon', component: AtributosPokemonComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
