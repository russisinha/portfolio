import { Component, OnInit, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../portfolio.service';
import { Skill } from '../../entites';
import { AppConstants } from '../../common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  statusMessage:string = "Loading...";
  imagePath: string;
  constructor(public portfolioService: PortfolioService) {
    console.log('constructor')
    
  }
  
  ngOnInit() {
    this.imagePath = AppConstants.SKILLS_IMAGE_PATH + '/';
    console.log('ngInit')
    setTimeout(() => {
      this.getSkillSet()
    }, 1000); 
  }
  
  private skills
  
  getSkillSet(){
    this.skills=this.portfolioService.getSkills()
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
  
}
