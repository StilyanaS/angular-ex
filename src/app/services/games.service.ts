import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private httpClient: HttpClient) {}
  public getData(): Observable<{ results: Character[] }> {
    return this.httpClient.get<{ results: Character[] }>(
      'https://api.rawg.io/api/games?key=09317b26e262453ab2af20bd14f6a3da&dates=2019-09-01,2019-09-30&platforms=18,1,7'
    );
  }
}
