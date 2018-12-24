import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    // this.selectedHero = this.heroes && this.heroes.length > 0 ? this.heroes[0] : { id: -1, name: 'empty'};
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }

  onSelectHero(hero: Hero): void {
    this.messageService.add('HeroesComponent: hero with id ('+ hero.id +') is selected');
    this.selectedHero = hero;
  }

}
