import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //@ViewChild('pageInfo') private pageInfo: ElementRef; 
  
  goToSection(elm){
    console.log(elm)
    elm.scrollIntoView({behavior: "smooth"})
  }
  title = 'portfolio';
  
}
