import {Component} from '@angular/core'
import {Cyclical} from './../../services'

@Component({
    selector: 'signage',
    template: `
    <movie [src]="src" (ended)="end()"></movie>
    `
})
export class SignageComponent {
    private srcs: Cyclical = new Cyclical(['fj-kei', 'nocrea']);
    src: string;
    constructor() {
        this.setUrl();
    }

    private setUrl() {
        this.src = `/assets/${this.srcs.next().value}.mp4`;
    }

    end() {
        this.setUrl();
    }

}