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
    this.httpClient.get(`http://my-json-server.typicode.com/sagarsalyan/fake-json/profiles/?name=${this.stName}`)
      .subscribe(
        (data:any[])=>{
          if(data.length){
          console.log(data);
          this.id = data[0].id;
          this.name = data[0].name;
          this.found=true;
        }
        }
      )

      //Test for Python API
      this.httpClient.get(`http://localhost:5000/users`)
        .subscribe(
          (data:any[])=>{
            if(data.length){
            console.log(data);
            // this.length = data.length;

            this.found=true;
          }
          }
        )
        //Test for Python API

        //Test for PHP Api
        this.httpClient.get('http://localhost/api/category/read.php')
          .subscribe(
            (data:any[])=>{
              if(data.length){
              console.log(data);
              // this.length = data.length;

              this.found=true;
            }
            }
          )
        //Test for PHP Api
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
