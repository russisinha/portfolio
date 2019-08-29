import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
    name: 'projectDate'
})
export class ProjectDatePipe extends DatePipe implements PipeTransform{
    transform(date: string){
        return super.transform(date, 'MMMM, yyyy');
    }
}