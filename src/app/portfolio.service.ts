import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, Project } from './entites';

@Injectable()
export class PortfolioService {
  
  constructor() { console.log('this is service constructor')}
  
  skillSet = [
    { name: 'HTML5', score: 4, logo: 'img-1' },
    { name: 'JavaScript', score: 4, logo: 'img-2' },
    { name: 'CSS3', score: 4, logo: 'img-3' },
    { name: 'Angular', score: 4, logo: 'img-4' },
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
