import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {SpotifyComponent} from './components/spotify/spotify.component';



import { SPAboutComponent } from './components/spotify/about.component';
import { SPSearchComponent } from './components/spotify/search.component';
import { SPArtistComponent } from './components/spotify/artist.component';
import { SPAlbumComponent } from './components/spotify/album.component';

    const appRoutes: Routes = [
        {
            path: '',
            component: AboutComponent
        },
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
                path: '',
                component: SPSearchComponent
            },{
                path: 'about',
                component: SPAboutComponent
            },
            {
                path: 'search',
                component: SPSearchComponent
            },
            {
                path:'artist/:id',
                component: SPArtistComponent
            },
            {
                path:'album/:id',
                component: SPAlbumComponent
            }
            ]
        }
    ];

    export const appRoutingProviders: any[] = [];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);