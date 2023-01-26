import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent {
Gender:String="Male"
selectedValues: string[] = [];

 loginForm=new FormGroup({
fname:new FormControl('',[Validators.required]),
lname:new FormControl('',Validators.required),
email:new FormControl('',[Validators.required,Validators.email]),
gender:new FormControl(''),
password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
phoneNo:new FormControl('',[Validators.required,Validators.maxLength(10)]),
languages:new FormControl('',[Validators.required]),
address: new FormControl('',[Validators.required,Validators.required])
 })


 lang = [
  { name: "HTML" },
  { name: "ReactJS" },
  { name: "Angular" },
  { name: "Bootstrap" },
  { name: "PrimeNG" },
];
 
 Value1:String=''
 Value2:String=''
 Value3:String=''
 Value4:String=''
 Value5:String=''
 Value6:String=''
 Value7:String=''
 Value8:String=''
 Value9:String=''
  loginUser()
 {
  console.warn(this.loginForm.value);
 }
 get fname()
 {
  return this.loginForm.get('fname');
  
 }
 get lname()
 {
  return this.loginForm.get('lname');
 }
 get email()
 {
  return this.loginForm.get('email');
 }
 get password()
 {
  return this.loginForm.get('password');
 }
 get confirmpassword()
 {
  return this.loginForm.get('confirmpassword');
 }
 get phoneNo()
 {
  return this.loginForm.get('phoneNo');
 }
 get address()
 {
  return this.loginForm.get('address');
 }

}
