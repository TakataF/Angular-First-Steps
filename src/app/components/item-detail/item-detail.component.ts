import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal, Game } from 'src/app/Interfaces';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{

  animal?: Animal;
  game?: Game;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
    this.getGame()
  }

  ngOnInit(): void {  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
  getGame(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItemGames(id).subscribe((game) => (this.game = game));
  }

}
