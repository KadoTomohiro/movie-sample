import {Injectable} from '@angular/core'

@Injectable()
export class Cyclical<T> implements Iterator<T> {

    constructor(private urls: T[]) {
    }

    private pointer: number = 0;

    next(): IteratorResult<T> {

        this.pointer = this.pointer % this.urls.length;
        return {
            value: this.urls[this.pointer++],
            done: false
        };

    }

}