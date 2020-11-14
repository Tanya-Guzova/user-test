import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //boolDisplay is the default name that is used in html to reference the pipe, but you can change the name to any other until that is unique
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  /*the default function that is called  when pipe executes; 
  the value(I changed the default "value" param name to "aBoolean") is what is passed as a parameter (the data you apply the pipe to!); 
  changed the unknown type to boolean; 
  removed the rest of the default params; there can be  multiple params but should be at least 1 (whatever you pass in the pipe for transformation, should be the 1st param); 
  defined return type as string
  */
  transform(aBoolean: boolean, locale: string ="en" ): string {
    //check to see if there is other than en l-ge in locale
    if(locale == "fr"){
      return aBoolean ? "Oui":"Non"
    }
    //use ternery operator on the way you want boolean data to be displayed
    return aBoolean ? "Yes" : "No";
  }

}
