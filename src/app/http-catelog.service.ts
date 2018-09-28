import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCatelogService {

  constructor(private http : HttpClient) { }

  getCatelogTypes(){
    return this.http.get("http://emall-catalogapi.azurewebsites.net/api/v1/catalogtype");
  }
}
