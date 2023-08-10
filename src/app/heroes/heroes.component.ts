import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

    constructor(private heroService: HeroService, private messageService: MessageService ) {}

    heroes: Hero[] = [];

    // selectedHero?: Hero;


    // onSelect(hero: Hero) {
    //     this.selectedHero = hero;
    //     this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
    // }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }
}
