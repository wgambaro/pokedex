import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeBase } from '../model/mode-base';
import { from, Observable } from 'rxjs';
import { ImagemPokemon } from '../model/imagem-pokemon';
import { EvolucaoPokemon} from '../model/evolucao-pokemon';
import { ChainPokemon } from '../model/chain-pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }
  buscarPokemao():Observable<ModeBase>{
    return this.http.get<ModeBase>("https://pokeapi.co/api/v2/pokemon?limit=891&offset=0")
  }
  buscarDadosPokemao(id: number):Observable<ImagemPokemon>{
    return this.http.get<ImagemPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
  buscarEvolucaoPokemon(id: number):Observable<ChainPokemon>{
    return this.http.get<ChainPokemon>(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
  }
}
