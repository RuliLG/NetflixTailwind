import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('./views/profile-selection/profile-selection.module').then(m => m.ProfileSelectionModule),
    },
    {
        path: 'browse',
        loadChildren: () => import('./views/netflix/netflix.module').then(m => m.NetflixModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
