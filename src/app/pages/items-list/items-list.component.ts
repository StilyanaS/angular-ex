import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  public characters!: Character[];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getData();
  }
  private getData(): void {
    this.gamesService.getData().subscribe({
      next: (resp: any) => {
        this.characters = resp.results;
        console.log(this.characters);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
