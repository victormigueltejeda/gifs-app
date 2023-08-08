import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box-componet';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardlistComponent,
    GifsCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports:[
    HomepageComponent,
    SearchBoxComponent,
  ]
})
export class GifsModule { }
