import { Album } from './Album';
import { Images } from './Image';

export class Artist{
    id: number;
    name: string;
    genres: any;
    popularity: number;
    images: Images[];
    albums: Album[];
}