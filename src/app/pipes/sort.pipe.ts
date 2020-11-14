import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], sortCriteria: string = "", asc: boolean = true): any[] {
    if (sortCriteria == "") {
      return arr; 
    }
    //finction-in-finction; define params as a and b (which are 2 instances of an arrray) of any type as there might be any data passed to be sorted
    const sortFn = (a: any, b: any): number => {
      //get value of sortCriteria of object a.
      let colA = a[sortCriteria];
      colA = (typeof colA) == "number" ? colA : colA.toString().toLowerCase();
       //get value of sortCriteria of object b.
      let colB = b[sortCriteria];
      colB = (typeof colB) == "number" ? colB : colB.toString().toLowerCase();
      //compare the 2 objects values
      if (colA === colB) {
        return 0;
      }
      if (colA < colB) {
        return (asc) ? -1 : 1;
      }
      else {
        return (asc) ? 1: -1;
      }
    }
    return arr.sort(sortFn);
  }

}
