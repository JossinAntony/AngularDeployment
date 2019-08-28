import { Component, OnInit } from '@angular/core';
import {NgForm} from'@angular/forms';
import {ApiService} from '../api.service';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
   
  }

onSubmit(data:NgForm) {
  this.apiservice.delDataByMob(data.value.smob).subscribe((response)=>{
    console.log(response);
    alert('successfully deleted!');
  })

  }
}
