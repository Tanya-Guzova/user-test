import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordDisplay'
})
export class PasswordDisplayPipe implements PipeTransform {

  transform(uPassword: string): string {
    //displaying password with hashtag sign
    let strLength = uPassword.length;
    let hash = "";
    for (let i = 0; i<strLength; i++ ){
       hash += "*";
    }
    return hash;
  }

}
