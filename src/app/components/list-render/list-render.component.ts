import { Component } from '@angular/core';

import { Animal } from 'src/app/Interfaces';

import { Console } from 'src/app/Interfaces';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "tom",  type: "Cat", age: 10}, 
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1},
  ];

  consoles: Console[] =[
    {name: "playstation5", type: "Console", brand: "Sony", value: 5500},
    {name: "XboxOne", type: "Console", brand: "Microsoft", value: 4000},
    {name: "PC", type: "Computer", brand: "Any", value: 13500},
  ];

  valueDetails ='';

  animalDetails ='';

animal = {
  name: "teste",
  type: "alguma coisa",
  age: 15,
};

showAge(animal: Animal): void{
  this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`
};

showValue(console: Console): void{
  this.valueDetails = `Console: ${console.name} o tipo do console é: ${console.type} a marca dele é: ${console.brand} e o valor dele é: ${console.value}`
};

constructor(private listService: ListService){

}

removeAnimal(animal: Animal){
  console.log('Removendo animal...')
  this.animals = this.listService.remove(this.animals, animal);
}

}
