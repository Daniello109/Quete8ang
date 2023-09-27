import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.css']
})
export class CreateOnomatopiaComponentComponent {
   
  @Output() /* 1 - Se empieza por preparar el componente hijo */
  newOnomatopia: EventEmitter<string> = new EventEmitter() /*Se pone el output, con el tipo de información que desees pasar al componente padre. El tipo de output Eventemitter sirve como vehículo para llevar la infomación.
  al ponerle string, quiere decir que llevará una string, pero puede ser cualquier cosa. con la instancia de new EventEmitter, se crea un preparado para recibir esta información */
 
  sendOnomatopiaToParent(value:string) { /* 3 esta función va a servir para introducir la información precisa. Servirá para recuperar el valor del input, que se almacenará en newOnomatopia y que será de tipo string, que habrá que subir al compo padre*/ 
    this.newOnomatopia.emit(value);
  }
  

 
  constructor(){
  }
 

}
