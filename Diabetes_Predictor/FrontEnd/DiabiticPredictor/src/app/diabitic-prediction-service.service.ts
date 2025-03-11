import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiabiticPredictionServiceService {

  constructor() { }

  private _http=inject(HttpClient)

  predictDiabitic(obj:any){
    return this._http.post("http://127.0.0.1:5000/predict",obj,{responseType:"json"})
  }
}
