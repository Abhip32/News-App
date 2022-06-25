import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }

  apiCall(cun:any,cat:any){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${cun}&category=${cat}&apiKey=b305d6f4a9a64323b87b51be29361f8f&pageSize=50`);
  }

  apiSearchCall(val:any){
    return this.http.get(`https://newsapi.org/v2/everything?q=${val}&apiKey=b305d6f4a9a64323b87b51be29361f8f&pageSize=50`);
  }

}
