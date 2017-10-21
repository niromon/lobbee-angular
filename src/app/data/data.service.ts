import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {LobbeeStore, Product} from "../reducer";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
        /*this.dataResults = {
            products : [this.findProduct(1), this.findProduct(2)],
            res: [{
                store: this.findStore(1),
                distance: 450,
                products: [{productId: 1, rate: 3, price: 3}, {productId: 2, rate: 4, price: 7}],
                summary: {rate: 3.5, price: 5}
            },
                {
                    store: this.findStore(2),
                    distance: 600,
                    products: [{productId: 1, rate: 2, price: 4}, {productId: 2, rate: 5, price: 6}],
                    summary: {rate: 3.5, price: 5}
                }]
        };*/
    }

    public loadAsyncProducts() {
        return this.http.get('/assets/mock-data/products.json').map(r => r.products);
    }

}
