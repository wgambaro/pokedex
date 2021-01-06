import { Component, OnInit } from '@angular/core';
import { ModelPokemon } from '../model/model-pokemon';
import { PokemonServiceService } from '../service/pokemon-service.service';

@Component({
  selector: 'app-listar-pokemon',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.scss']
})
export class ListarPokemonComponent implements OnInit {

  constructor(private pokemonservice: PokemonServiceService) { }
  dados: ModelPokemon[] = []

  ngOnInit(): void {
    this.pokemonservice.buscarPokemao().subscribe(x => {
      this.dados = x.results
    })
  }

  buscarId(url: string){
    return  url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
  }

  buscarImagem(url: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.buscarId(url)}.png`;
  }

}
