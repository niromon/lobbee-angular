import {Component, OnInit} from '@angular/core';
import {Action, ActionValue, State} from "../reducer";
import {Store} from "../store";

@Component({
    selector: 'search',
    styles: [``],
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    public localState = {}
    constructor(private store: Store<State, ActionValue>) {}

    public ngOnInit() {}

    search(): void {
        this.store.sendAction({
            type: Action.SHOW_RESULTS,
            value: {products : this.store.state.products}
        });
    }

}