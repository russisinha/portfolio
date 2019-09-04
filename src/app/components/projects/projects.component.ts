import { Component, OnInit } from '@angular/core';
import { WorkExp, Skill, Projects } from '../../entites';
import { PortfolioService } from '../../portfolio.service';
import { Observable } from 'rxjs';
import { AppConstants } from '../../common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private workExpStatusMessage:string = "Loading...";
  private projectsStatusMessage:string = "Loading...";
  private imagePath: string;
  private workExpList: WorkExp[];
  private projectsList: Projects[];
  
  constructor(public portfolioService: PortfolioService) {
    this.imagePath = AppConstants.PROJECTS_IMAGE_PATH + '/';
  }
  
  ngOnInit() {
    // setTimeout(() => {
    this.getWorkExpList()
    this.getProjectsList()
    // }, 2000);
  }
  
  getWorkExpList(){
    this.portfolioService.getWorkExpList().subscribe((data: WorkExp[])=>{
      this.workExpList=data
      console.log(this.workExpList)
      if(this.workExpList.length == 0){
        this.workExpStatusMessage = "No Data"
      }
    })
  }
  
  getProjectsList(){
    this.portfolioService.getProjectsList().subscribe((data: Projects[])=>{
      this.projectsList = data
      //console.log(data[0].urlText)
      if(this.projectsList.length == 0){
        this.projectsStatusMessage = "No Data"
      }
    })
  }
  
  
}
