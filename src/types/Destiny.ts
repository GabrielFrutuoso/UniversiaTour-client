import { Touristic } from "./Touristic";

export type Destiny = {
    id: number;
    state: string;
    best_season: string;
    weather: string;
    image_url: string;
    description: string;
    local_maps: string;
    touristics?: Touristic[];
}