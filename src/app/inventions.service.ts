import { Injectable } from '@angular/core';
import { Inventions } from './inventions';


@Injectable({
  providedIn: 'root'
})
export class InventionsService {

  rawInventions : Inventions[]=[{
    name : 'Java',
    inventor:'James Ghosling',
    year : '1995'
  },{
    name : 'Python',
    inventor:'Guide Van Rosum',
    year : '1991'
  },{
    name : 'C++',
    inventor:'BJarne Strone',
    year : '1983'
  }
]
  constructor() { }

  getInventions() : Inventions[]{
    return this.rawInventions;
  }
}
