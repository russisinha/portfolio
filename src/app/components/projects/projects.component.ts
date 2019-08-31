import { Component, OnInit } from '@angular/core';
import { WorkExp, Skill } from '../../entites';
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
  private workExpList: WorkExp[];
  
  constructor(public portfolioService: PortfolioService) {
    this.imagePath = AppConstants.PROJECTS_IMAGE_PATH + '/';
  }

  ngOnInit() {
    // setTimeout(() => {
      this.getWorkExpList()
    // }, 2000);
  }

  getWorkExpList(){
    this.portfolioService.getWorkExpList().subscribe((data: WorkExp[])=>{
      this.workExpList=data
      if(this.workExpList.length == 0){
        this.statusMessage = "No Data"
      }
    })
  }

}
