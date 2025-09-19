import { Pipe, PipeTransform } from "@angular/core";
import { Skill } from "../entities";

@Pipe({
    name: 'skillsFilter'
})
export class SkillsFilterPipe implements PipeTransform{
    transform(list: Skill[], filterVal: boolean){
        return list.filter(item => item.primary == filterVal && !item.disabled);
    }
}