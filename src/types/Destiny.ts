import { Touristic } from "./Touristic";

export type Destiny = {
    id: number;
    state: string;
    bestSeason: string;
    weather: string;
    imageUrl: string;
    description: string;
    localMaps: string;
    touristics?: Touristic[];
}