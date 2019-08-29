import { Component, OnInit } from '@angular/core';
import { Project, Skill } from '../../entites';
import { PortfolioService } from '../../portfolio.service';
import { Observable } from 'rxjs';
import { AppConstants } from '../../common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private statusMessage:string = "Loading...";
  private imagePath: string;
  private projects: Project[];
  
  constructor(public portfolioService: PortfolioService) {
    this.imagePath = AppConstants.PROJECTS_IMAGE_PATH + '/';
  }

  ngOnInit() {
    // setTimeout(() => {
      this.getProjectList()
    // }, 2000);
  }

  getProjectList(){
    this.portfolioService.getProjectList().subscribe((data: Project[])=>{
      this.projects=data
      if(this.projects.length == 0){
        this.statusMessage = "No Data"
      }
    })
  }

}
