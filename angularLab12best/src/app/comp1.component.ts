import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `<ul>
                <li *ngFor ="let item of itemsTochild" > {{item}}</li>
             </ul> `,
  styles: []
})
export class Comp1Component implements OnInit {

  constructor() { }

  @Input() itemsTochild:string[];
  ngOnInit() {
  }

}
