import {WatchService} from "./watch";
import {Backend} from "./backend";
import {Observable} from "rxjs";
import {Reducer, Store} from "./store";

export class LobbeeStore {
    id: number;
    name: string;
    rate: number
}
export class Product {
    id: number;
    name: string;
    category: number
}
export class Category {
    id: number;
    name: string;
}

export type State = { products: Product[]};

export type ShowProducts = { type: 'ADD_PRODUCT', name: string };
export type Action = ShowProducts;

export const initState: State = {products: []};

export function reducer(): Reducer<State, Action> {
    return (store: Store<State, Action>, state: State, action: Action): State|Observable<State> => {
        switch (action.type) {
            case 'ADD_PRODUCT':
                return {
                    ...state,
                    products: [...state.products, {id: 0, name: action.name, category: 0}]
                };

            default:
                return state;
        }
    }
}