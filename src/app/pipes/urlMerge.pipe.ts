import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'urlMerge'
})
export class UrlMergePipe implements PipeTransform{
    transform(displayStr: string, url: string){
        let linkhref = `<a href="${url}">${displayStr}</a>`
        return linkhref;
    }
}