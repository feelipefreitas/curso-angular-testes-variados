import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnBackground'
})
export class ReturnBackgroundPipe implements PipeTransform {

  transform(showComponent: boolean): string {
    if(showComponent) {
      return 'background-blue';
    } else {
      return '';
    }
  }
}
