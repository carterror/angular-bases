import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Spiderman', power: 200 },
    { id: uuid(), name: 'IronMan', power: 300 },
    { id: uuid(), name: 'Marvel', power: 100 },
    { id: uuid(), name: 'Guepardo', power: 600 },
  ];

  constructor() {}

  onAddCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
