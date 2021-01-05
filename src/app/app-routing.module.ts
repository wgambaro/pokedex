import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtributosPokemonComponent } from './atributos-pokemon/atributos-pokemon.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';

const routes: Routes = [
  { path: '', component: ListarPokemonComponent },
  { path: 'ListarPokemon', component: ListarPokemonComponent },
  { path: 'AtributosPokemon/:id', component: AtributosPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
