import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, WorkExp } from './entites';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators/map';

@Injectable()
export class PortfolioService {
  
  constructor(private _http: HttpClient) { console.log('this is service constructor')}
  
  skillSet: Skill[];
  
  projectList: WorkExp[];
  
  getSkills(): Observable<Skill[]>{
    return <Observable<Skill[]>> this._http.get('../data/skills.json')
    //.map((response: Response) => <Skill[]>response.json());
    
    // return new Observable(observer => {
    //   observer.next(this.skillSet);
    // })
  }
  
  
  
  getWorkExpList(): Observable<WorkExp[]>{
    return this._http.get<WorkExp[]>('../data/projects.json')

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
