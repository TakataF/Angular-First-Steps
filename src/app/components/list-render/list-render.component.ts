import { Component } from '@angular/core';

import { Animal } from 'src/app/Interfaces';

import { Game } from 'src/app/Interfaces';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  games: Game[] =[];

  valueDetails ='';

  animalDetails ='';


showAge(animal: Animal): void{
  this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`
};

showValue(games: Game): void{
  this.valueDetails = `Console: ${games.name} o tipo do console é: ${games.type} a marca dele é: ${games.brand} e o valor dele é: ${games.value}`
};

constructor(private listService: ListService){
  this.getAnimals()
  this.getGame()
}

removeAnimal(animal: Animal){
  this.animals = this.animals.filter((a) => animal.name !== a.name);
  this.listService.remove(animal.id).subscribe();
}

getAnimals(): void{
  this.listService.getAllAnimal().subscribe((animals) => (this.animals = animals));
}

getGame(): void{
  this.listService.getAllGame().subscribe((games) => (this.games = games));
}

}
