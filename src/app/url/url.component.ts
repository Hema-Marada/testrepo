import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent {
urlForm:FormGroup
listData : any
constructor(private fb:FormBuilder){

this.listData=[];

  this.urlForm=this.fb.group({
    method:['',Validators.required],
    url:['',Validators.required]
  })
}

  user:any={};
   lang = [
    { name: "GET" },
    { name: "POST" },
    { name: "PUT" },
    { name: "PATCH" },
    { name: "DELETE" },
  ];

  // methods=['GET', 'POST' ,'SET']
  
  
  
loginUser()
 {
  console.warn(this.urlForm.value);
 }
 get method()
 {
  return this.urlForm.get('method');
  
 }
 get url()
 {
  return this.urlForm.get('url');
 }
 reset(){
  
  this.urlForm.reset();
 }
 public addItem(): void
 {
  console.log(this.urlForm.value)
  this.user=Object.assign(this.user,this.urlForm.value)
  localStorage.setItem('Users',JSON.stringify(this.user))
  
 this.listData.push(this.urlForm.value);
 this.urlForm.reset();
 
}
removeItem(element: any){
this.listData.forEach((value: any,index: any)=>{
  if(value==element)
  this.listData.splice(index,1)
})
}}
