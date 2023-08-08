import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {

  constructor(private gifsService:GifsService){}


  get gifs(): Gif[]{
    return this.gifsService.gifList;
  }

}
