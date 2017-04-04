import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../classes/Artist';

@Component({
    moduleId: module.id,
  selector: 'spsearch',
  templateUrl: 'search.component.html',
})
export class SPSearchComponent {
 
  searchStr:string;
  searchRes:Artist[];


  constructor (private _spotifyService:SpotifyService){



  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
      console.log(this.searchRes.length);
    });
  }

}
