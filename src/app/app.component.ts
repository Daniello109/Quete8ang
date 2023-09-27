import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 3 configurar el componente padre */

  onomatopiaList:string[] = [""]; /*se crea una array de tipo string que albergará las onomatopias creadas, que llegarán gracias a la propiedad value de la funcion sendOnomatopia*/


  onReceiveOnomatopia(onomatopia: string) { /* con esta función se recupera el valor recibido y se inserta en onomatopiaList. se puede poner cualquier nombre al parámetro, ya que será la información que llegará y se albelgará en la lista con el método push*/
    const filteredOnomatopiaList = this.onomatopiaList.filter(element => element !== "");
    this.onomatopiaList=filteredOnomatopiaList;
    this.onomatopiaList.push(onomatopia);

  }
  
}

