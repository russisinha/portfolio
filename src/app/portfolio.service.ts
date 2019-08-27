import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, Project } from './entites';

@Injectable()
export class PortfolioService {
  
  constructor() { console.log('this is service constructor')}
  
  skillSet = [
    { name: 'HTML5', score: 4, logo: 'html.png', primary: true },
    { name: 'JavaScript', score: 4, logo: 'javascript.png', primary: true },
    { name: 'CSS3', score: 4, logo: 'css.png', primary: true },
    { name: 'Angular', score: 4, logo: 'angular.png', primary: true },
    { name: 'Bootstrap', score: 4, logo: 'bootstrap.png', primary: true },
    { name: 'SASS', score: 4, logo: 'sass.png', primary: false },
    { name: 'GitHub', score: 4, logo: 'github.png', primary: false },
    { name: 'SQL Server', score: 4, logo: 'sqlserver.png', primary: false },
    { name: 'Visual Studio', score: 4, logo: 'visualstudio.png', primary: false },
    { name: 'jQuery', score: 4, logo: 'jquery.png', primary: false },
    { name: 'C#', score: 4, logo: 'csharp.png', primary: false },
    { name: 'Elasticsearch', score: 4, logo: 'elasticsearch.png', primary: false },
    { name: 'PostgreSQL', score: 4, logo: 'postgresql.png', primary: false },
    { name: 'D3', score: 4, logo: 'd3.png', primary: false },
    { name: 'Apache Cordova', score: 4, logo: 'apachecordova.png', primary: false },
    { name: 'Bitbucket', score: 4, logo: 'bitbucket.png', primary: false },
    { name: '.NET', score: 4, logo: 'dotnet.png', primary: false },
    { name: 'Eclipse', score: 4, logo: 'eclipse.png', primary: false },
    { name: 'Java', score: 4, logo: 'java.png', primary: false },
    { name: 'MS Access', score: 4, logo: 'msaccess.png', primary: false },
    { name: 'Oracle SQL Developer', score: 4, logo: 'oraclesqldeveloper.png', primary: false },
    { name: 'Azure', score: 4, logo: 'azure.png', primary: false },
    { name: 'NodeJS', score: 4, logo: 'nodejs.png', primary: false },
    { name: 'Python', score: 4, logo: 'python.png', primary: false },
    { name: 'React', score: 4, logo: 'react.png', primary: false },
  ]
  
  projectList = [
    { companyName: 'HTML5', logo: 'img-1' },
    { companyName: 'JavaScript', logo: 'img-2' },
    { companyName: 'CSS3', logo: 'img-3' },
    { companyName: 'Angular', logo: 'img-4' },
  ]
  
  getSkills(): Observable<Skill[]>{
    return new Observable(observer => {
      observer.next(this.skillSet);
    })
  }

  getProjectList(): Observable<Project[]>{
    return new Observable(observer => {
      observer.next(this.projectList);
    })
  }

  


  // getNum(){
  //   this.getNumber().subscribe(data=>{console.log(`subscribe - ${data}`);})
  //   this.getNumber2().then(data=>{console.log(`promise - ${data}`);})
  // }

  // count:number = 0
  // count2:number = 0
  
  // getNumber(): Observable<number>{
  //   return new Observable(observer => {
  //     setInterval(()=>{
  //       this.count++
  //       console.log(`inside observable - ${this.count}`);
  //       observer.next(this.count);
  //     }, 1000)
  //   })
  // }

  // getNumber2(){
  //   return new Promise((resolve, reject) => {
  //     setInterval(()=>{
  //       this.count2++
  //       console.log(`inside promise - ${this.count2}`);
  //       resolve(this.count2);
  //     }, 1000)
  //   })
  // }

}
