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
    JumbotronComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
    SpotifyComponent,
    SPAboutComponent, SPSearchComponent, SPNavbarComponent
  ],
  
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
