import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h2> {{ title }} </h2>
            <app-comp1 [itemsTochild]="items"></app-comp1>
            <ul>
            <li appUpper> abrhaley mesfin aynialem</li>
            <li > Michiel Mesfin </li>
            <li appMyvisibility [boolValue] = '5 > 3' >Merhawi Mesfin</li>
            </ul>
            <br><br>

            <div 
            appMycolor (messageEmitter) = "getCurrentColor($event)" [ngClass]="{mySize:true}" >
            Click me to change my color: {{currentColor}}
            </div>
            `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   public items:string[]=["abrish","mera","miki"];

   currentColor = "black";

  getCurrentColor(value) {
    this.currentColor = value;
  }
}
