import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    {path:'', component: SearchComponent},
    {path:'about', component: AboutComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);