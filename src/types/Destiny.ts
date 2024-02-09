import { Touristic } from "./Touristic";

export type Destiny = {
    id: number;
    state: string;
    bestSeason: string;
    weather: string;
    imageUrl: string;
    touristics?: Touristic[];
}