import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagemPokemon } from '../model/imagem-pokemon';
import { PokemonServiceService } from '../service/pokemon-service.service';
// import { LocaPokemon } from '../model/loca-pokemon';
@Component({
  selector: 'app-atributos-pokemon',
  templateUrl: './atributos-pokemon.component.html',
  styleUrls: ['./atributos-pokemon.component.scss']
})
export class AtributosPokemonComponent implements OnInit {
  id: number = -1;
  pokemao: ImagemPokemon = new ImagemPokemon();
  imgPath = ""
  golpes = ""
  localizacao = ""
  constructor(private route: ActivatedRoute, private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.imgPath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    this.pokemonService.buscarDadosPokemao(this.id).subscribe(x => {
      this.pokemao = x

      this.pokemao.moves.forEach(z => {

        this.golpes += z.move.name + " ; "
      })
      this.pokemonService.buscarLocaPokemon(this.id).subscribe(y => {
        this.localizacao = y.location.name
      })
    })
  }
}