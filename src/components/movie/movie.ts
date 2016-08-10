import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'movie',
    templateUrl: 'components/movie/movie.template.html',
    styleUrls: ['components/movie/movie.style.css']
})
export class MovieComponent{

    @Input() src: string;
    @Output('ended') ended: EventEmitter<Event>;


    constructor() {
        this.ended = new EventEmitter();

    }

    endEvent(e) {
        this.ended.emit();
    }
}