import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

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

  consoles =[
    {name: "playstation5", type: "Console", brand: "Sony", value: 5500},
    {name: "XboxOne", type: "Console", brand: "Microsoft", value: 4000},
    {name: "PC", type: "Computer", brand: "Any", value: 13500},
  ];

  animalDetails ='';

animal = {
  name: "teste",
  type: "alguma coisa",
  age: 15,
};

showAge(animal: Animal): void{
  this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`
}

}
