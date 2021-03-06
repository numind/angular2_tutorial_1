import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';

// profile github search
import { ProfileComponent } from './components/profile/profile.component';

// spotify search
import { SpotifyComponent } from './components/spotify/spotify.component';
import { SPAboutComponent } from './components/spotify/about.component';
import { SPSearchComponent } from './components/spotify/search.component';
import { SPNavbarComponent } from './components/spotify/navbar.component';
import { SPArtistComponent } from './components/spotify/artist.component';
import { SPAlbumComponent } from './components/spotify/album.component';

// mean TODO 
import { MeantodoComponent } from './components/meantodo/meantodo.component';

// PIPES
import { SongTime } from './pipes/songtime.pipe';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({

  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  
  declarations: [
    AppComponent,
    NavbarComponent,
    SongTime,
    JumbotronComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
    SpotifyComponent,
    SPAboutComponent, SPSearchComponent, SPNavbarComponent, SPArtistComponent, SPAlbumComponent,
    MeantodoComponent
  ],
  
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
