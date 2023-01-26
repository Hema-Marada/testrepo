import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateToday : string=" ";
  name :string=" ";
  curency:number=8.6432;
  dec:number=4.4242;
  nam:string="Hema Marada "
  constructor() {
    

  }
  ngOnInit(): void {
this.dateToday=new Date().toDateString()
this.name="Hema Marada"
  }
}

