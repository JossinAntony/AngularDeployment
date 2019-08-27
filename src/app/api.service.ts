import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertData(data){
    console.log("submitteddd");
    console.log( data);
    return this.http.get("http://persondb-jossin.herokuapp.com/saveInfo/?uname="+data.uname+"&umob="+data.umob+"&umsg="+data.umsg+"&umail="+data.umail);
  }

  getData(){
    return this.http.get("https://persondb-jossin.herokuapp.com/retrieveInfo");
  }
}
