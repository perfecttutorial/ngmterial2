import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'main-content',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  response :any;
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    let obs = this.httpClient.get('assets/customer.json');
    obs.subscribe((res)=> {
      console.log(res+"-------------- saddsdsad")
      this.response = res;
    })
  }
 
  
  

}
