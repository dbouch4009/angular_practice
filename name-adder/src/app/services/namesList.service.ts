import { Names } from '../entities/names';
import { EventEmitter } from '@angular/core';
export class NamesListService {
    getLastName(){
        return this.namesList.length - 1;
    }
    namesList = [
        {
            firstName:'John',
            lastName:'Mark'
        },
        {
            firstName:'Paul',
            lastName: 'Shade'
        }
    ];
    
  addName(nameIn: Names){
    this.namesList.push(nameIn);
    //console.log(`Name count: ${this.namesList.length}`);
  }

}
