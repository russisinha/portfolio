import { Pipe, PipeTransform } from "@angular/core";
import { Skill } from "../entites";

@Pipe({
    name: 'primaryFilter'
})
export class PrimaryFilterPipe implements PipeTransform{
    transform(list: Skill[], filterVal: boolean){
        return list.filter(item => item.primary == filterVal);
    }
}