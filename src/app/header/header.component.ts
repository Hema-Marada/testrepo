import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  people:any[]=[{
"name":"Hema Maraada",
"City":"Vijayawada"
  },
  {
    "name":"Barnabas Telaagreddy",
    "City":"Kakinada"
      },
      {
        "name":"Vandana Kottapalli",
        "City":"Srikakulam"          },
          {
            "name":"Chinna",
            "City":"Pitapuram"
              },
              {
                "name":"Vineetha",
                "City":"East Godavari"
                  },
                  {
                    "name":"Hima Sri",
                    "City":"Vijayawada"
                      }]
                      
}
