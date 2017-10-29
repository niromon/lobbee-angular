import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {SearchComponent} from "./search/search.component";

export const ROUTES: Routes = [
    { path: '',      component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'detail', loadChildren: './+detail#DetailModule'},
    { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
    { path: '**',    component: NoContentComponent },
];
