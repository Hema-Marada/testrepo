import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  
  Value:String=" "

  ngOnInit(){
    
  }
loginUser(item:any){
console.warn(item);
}
}
