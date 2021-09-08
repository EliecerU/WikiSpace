import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WikiAppService {

  constructor(private http: HttpClient) { 
    console.log('WikiSpace service listo');
  }

  getQuery( query:string ){
    const url = `http://api.mediastack.com/v1/${ query }`;
    return this.http.get(url);
  }

  getNew(){
    return this.getQuery('news?access_key=e8062975e11ea6c0c61b7f1bf06cca28&keywords=astronomy&languages=es');
  }
}
