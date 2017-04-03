import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {SpotifyComponent} from './components/spotify/spotify.component';



import { SPAboutComponent } from './components/spotify/about.component';
import { SPSearchComponent } from './components/spotify/search.component';

    const appRoutes: Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'spotify',
            component: SpotifyComponent,
            children:[
            {
                path: 'about',
                component: SPAboutComponent
            },
            {
                path: 'search',
                component: SPSearchComponent
            }
            ]
        }
    ];

    export const appRoutingProviders: any[] = [];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);