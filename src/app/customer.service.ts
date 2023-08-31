import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class customerService {

 
  constructor(private http:HttpClient){}
getcustomers():Observable<any>{
  return this.http.get('http://localhost:3000/customers');
}

}