import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';



@Injectable({providedIn: 'root'})
export class GifsService {
  constructor(private http:HttpClient) { 
    this.loadLocalStorage();
  }

  public gifList:Gif[] =[];

  private _tagsHistory: string[] = [];
  private apikey: string = "uvCu6Bzt4Q15rlS6dsNUxrUZR2NENoqd";
  private serviceUrl :string = "http://api.giphy.com/v1/gifs/";

 
  searchTag(tag:string):void{
    if(tag.length ===0) return;
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set("api_key",this.apikey)
    .set("limit","10")
    .set("q",tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}search`,{params})
    .subscribe(res => {
      this.gifList= res.data;
    })

    /*fetch("http://api.giphy.com/v1/gifs/search?api_key=uvCu6Bzt4Q15rlS6dsNUxrUZR2NENoqd&q=burrito&limit=10")
    .then(res => res.json())
    .then(data => console.log(data))*/
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage():void {
    localStorage.setItem("history",JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{

    if(!localStorage.getItem("history")) return
    const temporal = localStorage.getItem("history")


    this._tagsHistory = JSON.parse(temporal!)


    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0])
  }

  private organizeHistory(tag:string):void{ 
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0,10)
    this.saveLocalStorage()
  }
}