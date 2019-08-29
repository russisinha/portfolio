import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, Project } from './entites';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators/map';

@Injectable()
export class PortfolioService {
  
  constructor(private _http: HttpClient) { console.log('this is service constructor')}
  
  skillSet: Skill[];
  
  projectList = [
    { companyName: 'Prowareness', position: 'Technical Developer', description: '', 
    responsibilities: 
    '- Worked as part of an AGILE team in building an online portal a mobile network service provider based in Netherlands.<br>'+
    '- Involved in backend development using JAVA and JDBC as well as frontend development using AngularJS, HTML, CSS, JavaScript, jQuery, Bootstrap.'+
    '- Regular interactions with product owners in understanding the requirements of new features to be added.'+
    '- Implementing new features of the application and testing it end to end and create a test report for the same.',
    startYear: '3/1/2017', endYear: '8/14/2017', logo: 'prowareness.png' },
    { companyName: 'Tallenge', position: 'Software Developer', description: '', responsibilities: 'role and responsibilities', startYear: '12/1/2012', endYear: '2/28/2017', logo: 'tallenge2.png' },
    { companyName: 'Timken Engineering and Research - India Private Limited', position: 'Project Trainee - Web Developer', description: '', responsibilities: 'role and responsibilities', startYear: '6/1/2012', endYear: '11/30/2012', logo: 'timken.png' }
  ]
  
  getSkills(): Observable<Skill[]>{
    return <Observable<Skill[]>> this._http.get('../data/skills.json')
    //.map((response: Response) => <Skill[]>response.json());
    
    // return new Observable(observer => {
    //   observer.next(this.skillSet);
    // })
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
