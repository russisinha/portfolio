import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, WorkExp, Projects } from './entites';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {
  
  constructor(private _http: Http) { console.log('this is service constructor')}
  
  skillSet: Skill[];
  
  projectList: WorkExp[];
  
  getSkills(){
    return this._http.get('data/skills.json')
    .map(response => response.json())

    //.map((response: Response) => <Skill[]>response.json());
    
    // return new Observable(observer => {
    //   observer.next(this.skillSet);
    // })
  }
  
  
  
  getWorkExpList(): Observable<WorkExp[]>{
    return this._http.get('data/workExp.json')
    .map(response => response.json())

    // return new Observable(observer => {
    //   observer.next(this.projectList);
    // })
  }
  
  
  getProjectsList(): Observable<Projects[]>{
    return this._http.get('data/projects.json')
    .map(response => response.json())

    // return new Observable(observer => {
    //   observer.next(this.projectList);
    // })
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


// var config = {
//   headers: {
//       'Content-Type': 'application/json',
//       'X-Api-Key': $scope.apiKey
//   }
// };

// $http.get(
//   'https://api.newrelic.com/v2/applications.json',
//   config
// )
