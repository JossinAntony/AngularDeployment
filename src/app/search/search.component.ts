import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; //import form modules
import {ApiService} from '../api.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   person : Array<object>;

  constructor(private apiservice:ApiService,private router: Router) { }

  // status = false;
  // onSubmit(data){
  //   if(data.value.name == 'admin'){
  //     this.status=true;
  //     console.log(data);
  //   }
  // }

     status = false;
    onSubmit(data:NgForm){

      this.apiservice.getDataByMob(data.value.smob).subscribe((response:Array<Object>)=>{

        if(response.length > 0){
          this.status = true;
          this.person = response;
        }
        //this.person=JSON.stringify(response);
        //this.router.navigate(['/viewsingle',this.person]);
        //alert('successfully retrieved!');
        //this.router.navigate(['/viewsingle'],{queryParams: {person: this.person }});
      })
    }
  ngOnInit() {
  }

}
