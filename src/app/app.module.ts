import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';
import { AtributosPokemonComponent } from './atributos-pokemon/atributos-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPokemonComponent,
    AtributosPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
