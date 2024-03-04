import { Destiny } from "./Destiny";
import { Image } from "./Image";

export type Touristic = {
    destinies: Destiny;
    id: number;
    location: string;
    city: string;
    local_maps: string;
    description: string;
    destinies_id: number;
    images?: Image[]
}