import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrl: 'puszek1.jpg',
      vaccination: '+',
      funFact: "Loves food, especially yours food.",
      reserved: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: 'mruczek1.jpg',
      vaccination: '-',
      funFact: "Looks angry, but is real sweetheart.",
      reserved: true
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: 'kiciek.jpg',
      vaccination: '+',
      funFact: "Leaves hair but you cannot see it.",
      reserved: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: 'klaczek.jpg',
      vaccination: '-',
      funFact:"His eyes are visibile at night. Scary visibile.",
      reserved: true
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: 'pimpus.jpg',
      vaccination: '+',
      funFact:"Can jump about 1.5 meters in height. Exactly the height of your warderobe.",
      reserved: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
  getPreviousCat(cat: Cat): Observable<Cat> {
    if (this.allCats.indexOf(cat) == 0) {
      return of(this.allCats[this.allCats.length - 1])
    }
    return of(this.allCats[this.allCats.indexOf(cat) - 1]);
  }

  getNextCat(cat: Cat): Observable<Cat> {
    if (this.allCats.indexOf(cat) == (this.allCats.length - 1)) {
      return of(this.allCats[0])
    }
    return of(this.allCats[this.allCats.indexOf(cat) + 1]);
  }
}
