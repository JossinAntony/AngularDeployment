import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   person= "";
   myData: Array<object> = [];

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm){
    this.apiservice.getDataByMob(data.value.smob).subscribe((response:Array<object>)=>{
      // this.person=JSON.stringify(response);
      // this.router.navigate(['/update'], {queryParams: {person:this.person}});
      this.myData=response;
      console.log(response);
    })
  }

  edit(){
   this.apiservice.updatePerson(this.myData[0]).subscribe((response)=>{
    console.log(response);
   })
  }




}
