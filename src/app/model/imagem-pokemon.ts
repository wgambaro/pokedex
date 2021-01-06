import { GolpePokemon } from "./golpe-pokemon";
import { TipoPokemon } from "./TipoPokemon/tipo-pokemon";

export class ImagemPokemon {
    public id: number = 1;
    public name: string = "";
    public types: TipoPokemon[] =[]
    public moves: GolpePokemon[] =[]
}
