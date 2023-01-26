import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Task';
  // name='Hema Marada';
  // disable=false
  // onClick(){
  //   console.log("button has clicked")
  Value:String=" "
  msg="Hello Hema Marada"

  ngOnInit(){
    
  }
loginUser(item:any){
console.warn(item);
}
receiveMessage($event: string){
  this.msg=$event
}
}
