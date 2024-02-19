import { Destiny } from "./Destiny";
import { Image } from "./Image";

export type Touristic = {
    destinies: Destiny;
    id: number;
    location: string;
    city: string;
    localMaps: string;
    description: string;
    destiniesId: number;
    images?: Image[]
}