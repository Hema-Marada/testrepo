import { Component,Input , Output,EventEmitter} from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-componrntscommunication',
  templateUrl: './componrntscommunication.component.html',
  styleUrls: ['./componrntscommunication.component.css']
})
export class ComponrntscommunicationComponent {
@Input() msg:string | undefined

message:string="hello hema"

@Output() messageEvent=new EventEmitter<string>()

sendMessage()
{
  this.messageEvent.emit(this.message)
}
}
