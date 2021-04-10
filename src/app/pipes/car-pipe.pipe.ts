import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'carPipe'
})
export class CarPipePipe implements PipeTransform {

  transform(value: CarDetail[], carText:string): CarDetail[] {
    carText = carText ? carText.toLocaleLowerCase():""
    return carText?value.filter((c:CarDetail)=>c.carName.toLocaleLowerCase().indexOf(carText)!==-1):value;
   }
 
}
