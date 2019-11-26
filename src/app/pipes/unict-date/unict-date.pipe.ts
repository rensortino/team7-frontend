import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unictDate'
})
export class UnictDatePipe implements PipeTransform {

  transform(value: string, timeDiff: number): string {

    const date = new Date(value);

    const day = '0' + date.getDate();
    const month = '0' + date.getMonth();
    const year = date.getFullYear();
    const hour = '0' + (date.getHours() + timeDiff);
    const minute = '0' + date.getMinutes();

    return day.slice(-2) + '-' +
      month.slice(-2) + '-' +
      year + ' ' +
      hour.slice(-2) + ':' +
      minute.slice(-2);
  }

}
