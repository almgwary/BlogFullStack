import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({name:'countAverage'})
export class CountAverage implements PipeTransform {
    transform(count:any, args:string[]){

        if(count < 1000) return count ;
        //cast thousands
        else if (count >= 1000 && count < 1000000) return ((count/1000).toString()+'K') ;
         //cast milions
        else if (count >= 1000000 && count < 1000000000) return ((count/1000000).toString()+'M') ;
         //cast trellions
        else if (count >= 10000000000 ) return ((count/10000000000).toString()+'T') ;
    }
}