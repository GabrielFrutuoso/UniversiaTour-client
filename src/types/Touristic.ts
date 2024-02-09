import { Image } from "./Image";

export type Touristic = {
    id: number;
    location: string;
    city: string;
    localMaps: string;
    description: string;
    destiniesId: number;
    images?: Image[]
}