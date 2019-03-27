import { Component, OnInit,ViewChild, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MainContent } from 'src/app/model/maincontent.model';


@Component({
  selector: 'main-content',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})


export class MaincontentComponent implements OnInit {

  response :any;
  mainCont : MainContent = {
    selectDT:null,
    state:null
   
  }
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    let obs = this.httpClient.get('assets/customer.json');
    obs.subscribe((res)=> {
      console.log(res+"-------------- saddsdsad")
      this.response = res;
    })
  }

 /*  onSubmit(mcForm:NgForm):void { 

    console.log(mcForm.value)
   }
  */
 onSubmit(mcForm:MainContent):void { 

  console.log(mcForm)
 }

  
  

}
