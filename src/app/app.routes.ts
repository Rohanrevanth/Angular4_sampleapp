import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GrabpageComponent } from './grabpage/grabpage.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'grab',
        component: GrabpageComponent
    }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
