import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// apicalls source code in: S:\CausalityBiomodels\ABCD\ICT\HW\HW26082019_3
  constructor(private http:HttpClient) { }

  insertData(data){
    return this.http.get("http://persondb-jossin.herokuapp.com/saveInfo/?uname="+data.uname+"&umob="+data.umob+"&umsg="+data.umsg+"&umail="+data.umail);
  }

  getData(){
    return this.http.get("https://persondb-jossin.herokuapp.com/retrieveInfo");
  }

  getDataByMob(mob){
    //console.log(mob);
    return this.http.get("http://persondb-jossin.herokuapp.com/searchByMobAPI/?q="+mob);
  }

  delDataByMob(mob){
    return this.http.get("https://persondb-jossin.herokuapp.com/delByMobAPI/?q="+mob);
  }
}
