import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atributos-pokemon',
  templateUrl: './atributos-pokemon.component.html',
  styleUrls: ['./atributos-pokemon.component.scss']
})
export class AtributosPokemonComponent implements OnInit {
  id: number = -1;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
