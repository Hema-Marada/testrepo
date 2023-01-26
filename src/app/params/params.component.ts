import { Component } from '@angular/core';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent {
  constructor(){}
public color:string="";

ngOnInit(){
  
}
lang = [
  { name: "HTML" },
  { name: "ReactJS" },
  { name: "Angular" },
  { name: "Bootstrap" },
  { name: "PrimeNG" },
];
}

