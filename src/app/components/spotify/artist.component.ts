import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Artist } from '../../classes/Artist';
import { Album } from '../../classes/Album';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
  selector: 'spartist',
  templateUrl: 'artist.component.html',
})
export class SPArtistComponent implements OnInit{
 
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifyService:SpotifyService, 
                private _route:ActivatedRoute){

                }
    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                .subscribe(artist => {
                    this.artist = artist
                })
            });
    }
}
