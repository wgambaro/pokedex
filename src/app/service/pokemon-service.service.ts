import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeBase } from '../model/mode-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }
  buscarPokemao():Observable<ModeBase>{
    return this.http.get<ModeBase>("https://pokeapi.co/api/v2/pokemon?limit=150&offset=1")
  }
}
