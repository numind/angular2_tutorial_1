import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Artist } from '../../classes/Artist';
import { Album } from '../../classes/Album';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
  selector: 'spalbum',
  templateUrl: 'album.component.html',
})
export class SPAlbumComponent implements OnInit{
 
    id: string;
    album: Album[];

    constructor(private _spotifyService:SpotifyService, 
                private _route:ActivatedRoute){

                }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                
                this._spotifyService.getAlbum(id)
                .subscribe(album => {
                    this.album = album;
                    console.log(album)
                })

            });
    }
}
