import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Felipe";
  age: number = 23;
  job = "Programador"; //qunado a variavel nao esta tipada ela automaticamente é String
  hobbies = ['Airsoft', 'Jogar', 'Ler']
  car = {
    name: 'Nissan',
    year: 2017,
  };

}
