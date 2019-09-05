import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router  , ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-view-single',
  templateUrl: './view-single.component.html',
  styleUrls: ['./view-single.component.css']
})


export class ViewSingleComponent implements OnInit {

  constructor(private apiService:ApiService,private route: ActivatedRoute) { }

   person = "";
   myPersonData: Array<object> = [];

  ngOnInit() {
    //console.log(this.route.snapshot.params['uname']);
    //console.log( this.route.snapshot.queryParamMap.get('person'));
    this.person =this.route.snapshot.queryParamMap.get('person');

    this.myPersonData = JSON.parse(this.person);
  }

}
