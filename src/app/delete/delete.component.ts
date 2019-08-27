import { Component, OnInit } from '@angular/core';
import {NgForm} from'@angular/forms';
import {ApiService} from '../api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit() {
   
  }

onSubmit(data:NgForm) {
  this.apiservice.delDataByMob(data.value.smob).subscribe((response)=>{
    console.log(response);
    alert('successfully deleted!');
  })

  }
}
