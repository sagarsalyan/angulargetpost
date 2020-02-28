import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styles: []
})
export class GetComponent implements OnInit {
  public stName="Sagar";
  name:string;
  id:number;
  found:boolean;
  constructor(private httpClient:HttpClient){

  }

  ngOnInit() {
  }

  onNameKeyUp(event:any){
    console.log(event.target.value);
    this.name = event.target.value;
    this.found=false;
  }
  getProfile(event){
    // console.log(event.target.stname.value);
    // console.log(this.stName);
    debugger;
    this.httpClient.get(`http://my-json-server.typicode.com/sagarsalyan/fake-json/profiles/?name=${this.name}`)
      .subscribe(
        (data:any[])=>{
          if(data.length){
          console.log(data);
          this.id = data[0].id;

          this.found=true;
        }
        }
      )
      this.httpClient.get(`https://linux-gi6m:8001/sap/opu/odata/sap/ZMMGATEPASS_SRV/ZmmpogateSet?sap-client=800&sap-language=EN`)
        .subscribe(
          (data:any[])=>{
            if(data.d.results.length){
            console.log(data);
            this.length = data.d.results.length;

            this.found=true;
          }
          }
        )
  }
  postProfile(){
    debugger;
    this.httpClient.post('http://my-json-server.typicode.com/sagarsalyan/fake-json/profiles/',
      {
        "id":"3",
        "name":"Rakshi"
      }
    )
    .subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }


}
