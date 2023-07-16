import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add.character.component.html',
  styleUrls: ['./add.character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onAddCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    if (!this.character.name) return;

    this.onAddCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
