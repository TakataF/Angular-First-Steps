import { Injectable } from '@angular/core';

import { Animal } from '../Interfaces';

import { Game } from '../Interfaces';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURl = 'http://localhost:3000/animals'

  private apigame= 'http://localhost:3000/games'

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiURl}/${id}`);
  }

  getAllAnimal() : Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURl)
  }

  getAllGame() : Observable<Game[]>{
    return this.http.get<Game[]>(this.apigame)
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiURl}/${id}`);
  }

  getItemGames(id: number) : Observable<Game>{
    return this.http.get<Game>(`${this.apigame}/${id}`);
  }

}
