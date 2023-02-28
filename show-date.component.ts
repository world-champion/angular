import { Component , ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss']
})
export class ShowDateComponent {


date:Date=new Date();
colorDate:string= this.getColor();

getColor(){
  if(this.date.getHours()<13)
    this.colorDate='aquamarine'
  else if(this.date.getHours()<18)
    this.colorDate='lightgoldenrodyellow'
  else 
    this.colorDate='darkslategrey'
  return this.colorDate;
}

@ViewChild('container', { static: true }) containerRef: ElementRef | any;

constructor(private renderer: Renderer2) {}
userInputSize:number=0;
userInput: string = '';
updateSize( ){
  this.func()
}
func() {
  let inputElement = document.createElement('input');
  inputElement.type = this.userInput;
  inputElement.style.fontSize=this.userInputSize+"px";
  inputElement.style.textAlign='center'
  document.body.appendChild(inputElement);
}
}
