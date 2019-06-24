import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterString: any, propName: string): any {
    if(value.length === 0){
      return value;
    }
    const resultArray = [];
    for(const item of value){      
      if(item[propName] === filterString){
        resultArray.push(item);
      }      
    }
    return resultArray;
  }

}
