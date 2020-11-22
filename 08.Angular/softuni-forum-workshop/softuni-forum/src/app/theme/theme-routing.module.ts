import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
    { path: 'theme', pathMatch: 'full', component: ThemeListComponent },
    { path: 'theme/detail/:id', component: DetailComponent },
    { path: 'theme/new', component: NewComponent }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
