import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html',
  styleUrls: ['./lazy-images.component.css']
})
export class LazyImagesComponent implements OnInit {


  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoades:boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error("URL property required")
  }


  onLoad() {

    setTimeout(() => {
      this.hasLoades = true;

    },1000)
  }




}
