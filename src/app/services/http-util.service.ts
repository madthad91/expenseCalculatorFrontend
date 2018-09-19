import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) { }

  // Calls the calculator API
  generateowes(expenseTripRecord){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post('https://polar-cliffs-76536.herokuapp.com', 
      expenseTripRecord,
      httpOptions);
  }
  
}
