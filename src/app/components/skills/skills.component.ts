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
  tess:string
  imagePath: string;
  constructor(public portfolioService: PortfolioService) {
    console.log('constructor')
    
  }
  
  ngOnInit() {
    this.imagePath = AppConstants.SKILLS_IMAGE_PATH + '/';
    console.log('ngInit')
    this.getSkillSet()
  }
  
  private skills: Skill[]=[]
  
  getSkillSet(){
    this.portfolioService.getSkills().subscribe((data: Skill[])=>{data.forEach((val)=>this.skills.push(val))})
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
  
}
