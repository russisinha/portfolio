import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';
import { Project } from 'src/app/entites';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public portfolioService: PortfolioService) {}

  ngOnInit() {
    this.getProjectList()
  }

  private projectList: Project[]

  getProjectList(){
    this.portfolioService.getProjectList().subscribe(data=>{this.projectList = data})
  }

}
