import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!--<h1>My First {{name}} {{1+1}} App</h1>-->
    <movie [title]="title" (ended)="end()"></movie>
    `,
})

export class AppComponent {
  public name: string = 'Angular';
  private titles: string[] = ['fj-kei', 'nocrea'];
  title: string;
  current: number;

  constructor () {
    this.setTitle();
  }

  private setTitle() {
    this.current = this.current === 0 ? 1 : 0;
    this.title = this.titles[this.current];
  }


  end(e) {
    this.setTitle();
    console.log(e);
  }

}
