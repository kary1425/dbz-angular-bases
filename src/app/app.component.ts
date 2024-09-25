import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Vivan Los Minions';
  public counter: number = 10;

  increaseBy (value:number) :void {
    this.counter += value;
  }

  resert() {
    this.counter = 10;
  }
}
