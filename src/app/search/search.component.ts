import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; //import form modules
import {ApiService} from '../api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  status = false;

  constructor() { }

  onSubmit(data){
    if(data.value.name == 'admin'){
      this.status=true;
      console.log(data);
    }
  }

  ngOnInit() {
  }

}
