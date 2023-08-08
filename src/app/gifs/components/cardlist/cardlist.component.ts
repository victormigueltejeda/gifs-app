import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cardlist',
  templateUrl: './cardlist.component.html',
})
export class CardlistComponent {

  @Input()
  public gifs: Gif[] =[];
}
