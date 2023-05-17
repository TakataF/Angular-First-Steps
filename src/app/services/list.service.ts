import { Injectable } from '@angular/core';

import { Animal } from '../Interfaces';

import { Console } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

}
