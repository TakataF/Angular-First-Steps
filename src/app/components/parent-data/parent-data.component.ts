import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent{
  @Input() name:string = '';
  @Input() userData!: {email: string, role: string} //A ! serve para indicar que o dado vai ser inicializado e para iniciar um objeto deve 
                                                    //ser feito dessa forma quando se tem muitas informações conjuntas
  
 

}
