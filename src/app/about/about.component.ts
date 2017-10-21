import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../data/data.service";
import {Action, Product, State} from "../reducer";
import {Store} from "../store";

@Component({
    selector: 'about',
    styles: [``],
    templateUrl: './about.component.html',
    providers: [DataService]
})
export class AboutComponent implements OnInit {

    public localState = { value: ''}
    public products: Array<Product> = [];

    constructor(
        public route: ActivatedRoute,
        private store: Store<State, Action>
    ) {}

    public ngOnInit() {}

    addProduct(name: string): void {
        this.store.sendAction({
            type: 'ADD_PRODUCT',
            name: name
        });
        this.localState.value = ''
    }

}
