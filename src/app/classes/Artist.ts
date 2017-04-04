import { Album } from './Album';
import { Images } from './Image';
import { Followers } from './Followers';

export class Artist{
    id: number;
    name: string;
    genres: any;
    popularity: number;
    images: Images[];
    albums: Album[];
    followers: Followers[];
}