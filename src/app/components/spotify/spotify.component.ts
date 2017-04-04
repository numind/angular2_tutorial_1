import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  moduleId: module.id,
  selector: 'spotify',
  templateUrl: 'spotify.component.html',
  providers: [SpotifyService]
})

export class SpotifyComponent {
 
}
