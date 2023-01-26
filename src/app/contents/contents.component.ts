import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
  
})

export class ContentsComponent {
  message = 'Persons names';
   names: string[] = ['Hema', 'Hima', 'hyma','Barnabas','Vandana','chinna','Vineetha','Ganesh','John','Srivani','Lakshmi','Saraswathi','Durga','Mani','Bhanu','Poojitha','Sai','Srinu','Sahasra','Krishna'];
//    onAdd() {

//     if (this.names  || !this.names) {
//       console.log(this.names)
//     }
// }


}
