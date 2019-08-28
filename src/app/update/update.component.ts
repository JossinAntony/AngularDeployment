import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router  , ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private person = "";
  private myPersonData: Array<object> = [];

  constructor(private apiService:ApiService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.person =this.route.snapshot.queryParamMap.get('person');
    this.myPersonData = JSON.parse(this.person);
    console.log(this.myPersonData);
  }

}
