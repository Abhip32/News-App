import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  

  constructor(
    private http: HttpClient
  ) { }

  apiCall(cat:any){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=TB2FHcneyT2HKhWkbn1AuS0jOgildCby`);
    
  }
  

  apiSearchCall(val:any){
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${val}&api-key=TB2FHcneyT2HKhWkbn1AuS0jOgildCby`)
    
  }

}
