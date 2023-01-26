import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent {
 
  Employ=new FormGroup({
    fname:new FormControl('',[Validators.required]),

})
get fname()
 {
  return this.Employ.get('fname');
  
 }
}
