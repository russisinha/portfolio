import { Component, OnInit} from '@angular/core';
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
  private statusMessage:string = "Loading...";
  private imagePath: string;
  private skills: Observable<Skill[]>;
  
  constructor(public portfolioService: PortfolioService) {
    console.log('constructor')
    this.imagePath = AppConstants.SKILLS_IMAGE_PATH + '/';
  }
  
  ngOnInit() {
    console.log('ngInit')
    this.getSkillSet()
  }
  
  getSkillSet(){
    this.skills=this.portfolioService.getSkills()
  }
  
}
