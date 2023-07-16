import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iron man asf';
  public age: number = 45;
  public method: string = 'Escapar';

  get capitalizeName(): string {
    return this.name
      .split(' ')
      .map((word) => word[0].toLocaleUpperCase() + word.substring(1))
      .join('');
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }
}
