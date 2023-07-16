import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public homeNames : string[] = ['Spiderman', 'IronMan', 'Marvel', 'Guepardo', 'Espinas']
  public hero_deleted: string | undefined;

  removeLastHero():void {
    this.hero_deleted = this.homeNames.pop()
  }
}
