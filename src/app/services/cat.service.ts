import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  URLBASE = "https://api.thecatapi.com/";

  constructor(private http: HttpClient) {
  }

  /*funciones*/
  getAllCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.URLBASE + 'v1/breeds');
  }

  getOneCat(id: string): Observable<Cat>{
    return this.http.get<Cat>(this.URLBASE + 'v1/breeds/' + id);
  }



}
