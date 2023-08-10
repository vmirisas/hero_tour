import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    private heroesUrl = 'api/heroes';

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
    }

    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find(h => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    } 

}
