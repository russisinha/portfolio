import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../portfolio.service';
import { Skill } from '../../entites';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  constructor(public portfolioService: PortfolioService) {
    console.log('constructor')
   }
  
  ngOnInit() {
    console.log('ngInit')
    this.getSkillSet()
  }

  private skills: Skill[]

  getSkillSet(){
    this.portfolioService.getSkills().subscribe(data=>{this.skills = data})
  }
  

}
