import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'

@Component({
    selector: 'movie',
    templateUrl: 'components/movie/movie.template.html',
    styleUrls: ['components/movie/movie.style.css']
})
export class MovieComponent implements OnInit{

    @Input() title: string;
    @Output('ended') ended: EventEmitter;


    constructor() {
        this.ended = new EventEmitter();

    }

    ngOnInit() {
        // let video = document.getElementById('myvideo');
        //
        // if (video.webkitRequestFullscreen) {
        //     video.webkitRequestFullscreen(); //Chrome15+, Safari5.1+, Opera15+
        // // } else if (video.mozRequestFullScreen) {
        // //     video.mozRequestFullScreen(); //FF10+
        // // } else if (video.msRequestFullscreen) {
        // //     video.msRequestFullscreen(); //IE11+
        // } else if (video.requestFullscreen) {
        //     video.requestFullscreen(); // HTML5 Fullscreen API仕様
        // } else {
        //     console.log('ご利用のブラウザはフルスクリーン操作に対応していません');
        //     return;
        // }
    }

    end(e) {
        this.ended.emit(e);
    }
}