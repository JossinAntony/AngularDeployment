import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   myData: Person [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

public fetchData(){
  this.apiService.getData().subscribe((response:Person[])=>{
    this.myData = response;
    //console.log(this.myData);
  })

}

}
