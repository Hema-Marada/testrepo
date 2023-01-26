import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent {


  addEmploy:FormGroup
listData : any
constructor(private fb:FormBuilder){

this.listData=[];

  this.addEmploy=this.fb.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    email:['',Validators.required,Validators.email],
    phoneNo:['',Validators.required,Validators.maxLength(10)],
    
  })
}
  user:any={};
  ngOnInit(){

  }
  
loginUser()
 {
  console.warn(this.addEmploy.value);
 }
 get fname()
 {
  return this.addEmploy.get('fname');
  
 }
 get lname()
 {
  return this.addEmploy.get('lname');
 }
 get email()
 {
  return this.addEmploy.get('email');
 }
 get phoneNo()
 {
  return this.addEmploy.get('phoneNo');
 }
//  onSubmit()
//  {
//   console.log(this.addEmploy.value)
//   this.user=Object.assign(this.user,this.addEmploy.value)
  // localStorage.setItem('Users',JSON.stringify(this.user))
//     this.addUser(this.user)
//  }
 
//  removeAll(){
  
//   this.addEmploy.reset()
//  }
 reset(){
  
  this.addEmploy.reset();
 }
 addItem()
 {
  console.log(this.addEmploy)
  this.user=Object.assign(this.user,this.addEmploy.value)
  // localStorage.setItem('Users',JSON.stringify(this.user))
  this.addUser(this.user)
//  this.listData.push(this.addEmploy.value);
 
 
}
addUser(user: any){

  let users=[];
  
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users')!);
    users = [user, ...users];
  }
  else{
   users.push(user)
  }
  localStorage.setItem('Users',JSON.stringify(users));
 }
// removeItem(element: any){
//   this.listData.forEach((value: any,index: any)=>{
//     if(value==element)
//     this.listData.splice(index,1)
//   })
 
}
