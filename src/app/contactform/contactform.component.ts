import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; //import form modules
import {ApiService} from '../api.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  getName ='';
  getEmail ='';
  getMsg = '';

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm) {
    console.log("submitteddd");
    console.log( data.value);
    this.apiService.insertData(data.value).subscribe((response)=>{
      console.log(response);
   
      alert('successfully inserted!');
    })

  }
}
