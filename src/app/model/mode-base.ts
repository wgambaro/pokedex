import { ModelPokemon } from "./model-pokemon";

export class ModeBase {
    count: number = 0;
    next: string = ""; 
    previous: string = "";
    results: ModelPokemon[] = []; 
}

