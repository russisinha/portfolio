import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //@ViewChild('pageInfo') private pageInfo: ElementRef; 
  title = 'portfolio';
  showHeaderMenu: boolean = false;
  
  goToSection(elm){
    //console.log(elm)
    this.toggleHeaderMenu()
    elm.scrollIntoView({behavior: "smooth"})
  }
  
  toggleHeaderMenu(){
    this.showHeaderMenu=!this.showHeaderMenu
  }

}
